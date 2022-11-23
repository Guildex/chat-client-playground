import { Button, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import axios from "axios";

export const LoginTemplate = () => {
  const router = useRouter();

  return (
    <Container display="flex" justify="center">
      <Button
        style={{
          backgroundColor: "#07b53b",
        }}
        onClick={async () => {
          const { data } = await axios.get(
            `http://${process.env.NEXT_PUBLIC_API_HOST}/auth/line`
          );

          console.log(data);
        }}
      >
        ログイン
      </Button>
    </Container>
  );
};
