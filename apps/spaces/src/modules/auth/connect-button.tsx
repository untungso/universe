import { EnterIcon } from "@radix-ui/react-icons";
import { Fragment, MouseEventHandler } from "react";
import Link from "next/link";
import type { ReactElement } from "react";
import { SmallButton } from "@components/button/base";
import { useSession } from "next-auth/react";
import { Paragraph } from "@components/typography/paragraph";
import { styledConnectButton } from "./connect-button.css";
import { useRouter } from "next/router";

export const ConnectButton = (): ReactElement => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/auth/connect`);
  };

  return (
    <Fragment>
      {status === "loading" ? (
        <Paragraph>Loading...</Paragraph>
      ) : status === "unauthenticated" ? (
        <SmallButton onClick={handleClick}>
          <p>Connect</p>
          <EnterIcon />
        </SmallButton>
      ) : (
        <SmallButton>Avatar</SmallButton>
      )}
    </Fragment>
  );
};
