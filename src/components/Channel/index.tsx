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
  useGetChannelQuery,
  useGetViewerQuery,
} from "~/@generated/graphql";

export const Channel = () => {
  const [body, setBody] = useState("");
  const router = useRouter();
  const channelUuid = router.query.channel as string;
  const [sendMessage] = useSendMessageMutation();
  const { data: viewerData } = useGetViewerQuery();
  const { data: channelData, subscribeToMore } = useGetChannelQuery({
    variables: {
      uuid: channelUuid,
    },
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore<MessageSentSubscription>({
      document: MessageSentDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (!prev.channel) return prev;

        const newComment = subscriptionData.data.messageSent;

        return {
          ...prev,
          channel: {
            ...prev.channel,
            messages: [...(prev.channel?.messages || []), newComment],
          },
        };
      },
    });

    return () => unsubscribe();
  }, [subscribeToMore]);

  return (
    <ChatContainer>
      <MessageList>
        {channelData?.channel?.messages?.map((message) => {
          const isSentByMe = message.sender?.id === viewerData?.viewer.id;

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
                      ? viewerData?.viewer.profile?.avatarUrls?.at(0)?.url || ""
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
              channelUuid,
              body,
            },
          });
        }}
      />
    </ChatContainer>
  );
};
