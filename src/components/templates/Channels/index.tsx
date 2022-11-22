import {
  Avatar,
  ConversationHeader,
  MainContainer,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import { useGetChannelsQuery } from "~/@generated/graphql";
import { Channel } from "~/components/Channel";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Channels = () => {
  const router = useRouter();
  const { data } = useGetChannelsQuery();

  return (
    <MainContainer>
      <Sidebar position="left">
        {data?.channels.map(({ uuid, name }) => (
          <NextLink
            href={{
              query: {
                channel: uuid,
              },
            }}
            key={uuid}
          >
            <ConversationHeader>
              <Avatar src="https://shibuyaplusfun.com/uploads/images/resized/2100x1534/shibuyaplusfun/000002/000002/dc2f44d5.png" />
              <ConversationHeader.Content>{name}</ConversationHeader.Content>
            </ConversationHeader>
          </NextLink>
        ))}
      </Sidebar>
      {router.query.channel && <Channel />}
    </MainContainer>
  );
};
