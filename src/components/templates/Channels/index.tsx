import {
  Avatar,
  ConversationHeader,
  MainContainer,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import {
  useCreateChannelMutation,
  useGetChannelsQuery,
} from "~/@generated/graphql";
import { TiPlus } from "react-icons/ti";
import { Channel } from "~/components/Channel";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Container, Grid, Input, Loading } from "@nextui-org/react";
import { useState } from "react";
import * as Styled from "./style";

export const Channels = () => {
  const router = useRouter();
  const { data, refetch } = useGetChannelsQuery();
  const [createChannel, { loading }] = useCreateChannelMutation();
  const [channelName, setChannelName] = useState("");

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <MainContainer responsive>
        <Sidebar position="left">
          <Container
            css={{ display: "flex", alignItems: "center", p: "8px 12px" }}
          >
            <Input
              aria-label="channelName"
              width="80%"
              placeholder="渋谷で飲もう！"
              disabled={loading}
              onInput={(e) => {
                setChannelName(e.currentTarget.value);
              }}
            />
            <Styled.SendButtonBox>
              <Styled.SendButton
                disabled={loading}
                onClick={async () => {
                  if (!channelName) return;

                  await createChannel({
                    variables: {
                      name: channelName,
                    },
                  });
                  refetch();
                }}
              >
                {loading ? (
                  <Loading size="xs" />
                ) : (
                  <TiPlus color="#fff" size="20px" />
                )}
              </Styled.SendButton>
            </Styled.SendButtonBox>
          </Container>

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
    </div>
  );
};
