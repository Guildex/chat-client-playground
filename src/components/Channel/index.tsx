import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.css";
import { useRouter } from "next/router";
import { useGetChannelQuery } from "~/@generated/graphql";

export const Channel = () => {
  const router = useRouter();
  const { data } = useGetChannelQuery({
    variables: {
      uuid: router.query.channel as string,
    },
  });

  console.log(data);

  return (
    <ChatContainer>
      <MessageList>
        {data?.channel?.messages?.map((message) => (
          <Message
            key={message.id}
            model={{
              message: message.content.body,
              sentTime: message.createdAt,
              sender: message.sender?.profile?.nickname,
              direction: "incoming",
              position: "single",
            }}
          />
        ))}
      </MessageList>
      <MessageInput />
    </ChatContainer>
  );
};
