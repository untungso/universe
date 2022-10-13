/**
 *
 */
import type { ReactElement } from "react";
import { Suspense } from "react";
import { SymbolIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { styledConnectFormWrapper } from "./connect-form.css";
import { useConnectForm } from "./connect-form.store";
/**
 *
 *
 */
const MetamaskLazy = dynamic<{}>(
  (): any => import(`./metamask`).then((mod) => mod.Metamask),
  {
    ssr: false,
  }
);

export const ConnectForm = (): ReactElement => {
  const isLoading = useConnectForm((state) => state.loading);

  return (
    <div className={styledConnectFormWrapper}>
      {isLoading ? (
        <SymbolIcon />
      ) : (
        <Suspense fallback={<div style={{ width: 60, height: 60 }} />}>
          <MetamaskLazy />
        </Suspense>
      )}
    </div>
  );
};
