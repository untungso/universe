/**
 *
 */
import { deployedChain, publicApplicationUrl } from "../../config/application";
import Image from "next/image";
import type { ReactElement } from "react";
import { SmallButton } from "../../components/button/base";
import { ethers } from "ethers";
import { useConnectForm } from "./connect-form.store";

declare global {
  interface Window {
    ethereum: any;
    TradingView: any;
  }
}

export const Metamask = (): ReactElement => {
  //   const router = useRouter();
  const toggleLoader = useConnectForm((state) => state.toggleLoading);

  const metamaskHandler = async (): Promise<void> => {
    toggleLoader();
    console.log(`Waiting for user action`);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        const network = await provider.getNetwork();
        if (network.chainId === deployedChain) {
          const { address, signature, success } = await signWalletQuery(
            provider
          );
          if (success) {
            console.log(address, signature);
          }
          toggleLoader();
        } else {
          alert(`network not handled`);
          await changeNetworkQuery();
          const { address, signature } = await signWalletQuery(provider);
          console.log(address, signature);
          toggleLoader();
        }
      } catch (error) {}
    } catch (error) {
      alert(`provider not found`);
      toggleLoader();
    }
  };

  return (
    <SmallButton onClick={metamaskHandler}>
      <Image
        src="/static/wallets/metamask.webp"
        width="32"
        height="32"
        alt="Metamask Connect"
      />
    </SmallButton>
  );
};

const changeNetworkQuery = async (): Promise<void> => {
  await window.ethereum.request({
    id: 1,
    jsonrpc: "2.0",
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x13881",
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
        chainName: "Polygon Testnet Mumbai",
        nativeCurrency: {
          name: "tMATIC",
          symbol: "tMATIC",
          decimals: 18,
        },
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
      },
    ],
  });
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x13881" }],
  });
};

const signWalletQuery = async (
  provider: ethers.providers.Web3Provider
): Promise<{ address: string; signature: string; success: boolean }> => {
  const account = await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [],
  });
  const message = [
    `I have read and accept the terms and condition`,
    `for this website ${publicApplicationUrl}`,
    `Please sign me in!`,
  ].join("\n");
  let signatureMessage: string;
  try {
    signatureMessage = await provider
      .getSigner(account[0])
      .signMessage(message);
    return {
      address: account[0] as string,
      signature: signatureMessage,
      success: true,
    };
  } catch (error) {
    return {
      address: `account_access_rejected`,
      signature: `signature_account_access_rejected`,
      success: false,
    };
  }
};

const handleSignIn = async (): Promise<void> => {};
