import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  MessageSentDocument,
  MessageSentSubscription,
  useSendMessageMutation,
  useGetChannelQuery,
} from "~/@generated/graphql";

export const Channel = () => {
  const [body, setBody] = useState("");
  const router = useRouter();
  const channelUuid = router.query.channel as string;
  const [sendMessage] = useSendMessageMutation();
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
        {channelData?.channel?.messages?.map((message) => (
          <Message
            key={message.id}
            model={{
              message: message.content.body,
              sentTime: message.createdAt,
              sender: message.sender?.profile?.nickname,
              direction: "outgoing",
              position: "single",
            }}
          />
        ))}
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
