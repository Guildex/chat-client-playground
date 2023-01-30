import {
  Avatar,
  ConversationHeader,
  MainContainer,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import { useGetTalksQuery } from "~/@generated/graphql";
import { TiPlus } from "react-icons/ti";
import { Channel } from "~/components/Channel";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Container, Grid, Input, Loading } from "@nextui-org/react";
import { useState } from "react";
import * as Styled from "./style";

export const Channels = () => {
  const router = useRouter();
  const { data, refetch } = useGetTalksQuery();
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
              onInput={(e) => {
                setChannelName(e.currentTarget.value);
              }}
            />
            <Styled.SendButtonBox>
              <Styled.SendButton
                onClick={async () => {
                  if (!channelName) return;

                  // await createChannel({
                  //   variables: {
                  //     name: channelName,
                  //   },
                  // });
                  refetch();
                }}
              >
                <TiPlus color="#fff" size="20px" />
              </Styled.SendButton>
            </Styled.SendButtonBox>
          </Container>

          {data?.talks.map(({ uuid }) => (
            <NextLink
              href={{
                query: {
                  talk: uuid,
                },
              }}
              key={uuid}
            >
              <ConversationHeader>
                <Avatar src="https://shibuyaplusfun.com/uploads/images/resized/2100x1534/shibuyaplusfun/000002/000002/dc2f44d5.png" />
                <ConversationHeader.Content>{uuid}</ConversationHeader.Content>
              </ConversationHeader>
            </NextLink>
          ))}
        </Sidebar>
        {router.query.talk && <Channel />}
      </MainContainer>
    </div>
  );
};
