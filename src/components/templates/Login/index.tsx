import { Button, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoginTemplate = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.token) return;

    localStorage.setItem("access_token", router.query.token as string);
    router.replace("/channels");
  }, [router.query.token]);

  return (
    <Container display="flex" justify="center">
      <Button
        style={{
          backgroundColor: "#07b53b",
        }}
        onClick={async () => {
          location.assign(
            `https://${process.env.NEXT_PUBLIC_API_HOST}/auth/line`
          );
        }}
      >
        ログイン
      </Button>
    </Container>
  );
};
