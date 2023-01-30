import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  MessageSentDocument,
  MessageSentSubscription,
  useSendMessageMutation,
  useGetViewerQuery,
  useGetTalkQuery,
} from "~/@generated/graphql";

export const Channel = () => {
  const [body, setBody] = useState("");
  const router = useRouter();
  const talkUuid = router.query.talk as string;
  const [sendMessage] = useSendMessageMutation();
  const { data: viewerData } = useGetViewerQuery();
  const { data: talkData, subscribeToMore } = useGetTalkQuery({
    variables: {
      talkUuid,
    },
  });

  console.log({ talkUuid });

  useEffect(() => {
    if (!talkUuid) return;

    const unsubscribe = subscribeToMore<MessageSentSubscription>({
      document: MessageSentDocument,
      variables: {
        talkUuid,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (!prev.talk) return prev;

        const newComment = subscriptionData.data.messageSent;

        return {
          ...prev,
          talk: {
            ...prev.talk,
            messages: [...(prev.talk?.messages || []), newComment],
          },
        };
      },
    });

    return () => unsubscribe();
  }, [subscribeToMore, talkUuid]);

  return (
    <ChatContainer>
      <MessageList>
        {talkData?.talk?.messages?.map((message) => {
          const isSentByMe =
            message.senderId === parseInt(viewerData?.viewer.id || "", 10);

          return (
            <Message
              key={message.id}
              avatarSpacer={!isSentByMe}
              model={{
                message: message.content.body,
                sentTime: message.createdAt,
                sender: message.sender?.profile?.nickname,
                direction: isSentByMe ? "outgoing" : "incoming",
                position: "single",
              }}
            >
              {!isSentByMe && (
                <Avatar
                  src={
                    isSentByMe
                      ? viewerData?.viewer.profile?.mainAvatar || ""
                      : ""
                  }
                />
              )}
            </Message>
          );
        })}
      </MessageList>
      <MessageInput
        placeholder="メッセージを入力"
        onChange={setBody}
        onSend={() => {
          sendMessage({
            variables: {
              input: {
                talkUuid,
                body,
              },
            },
          });
        }}
      />
    </ChatContainer>
  );
};
