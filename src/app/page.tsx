"use client";
import LogoMain from "@/components/logo-main";
import Navbar from "@/components/navbar";
import NFTMinter from "@/components/nft-minter";
import TitleMain from "@/components/title-main";
import NewContextProvider from "@/lib/context/NewContextProvider";
import WalletContextProvider from "@/lib/context/WalletContextProvider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NewContextProvider>
        <WalletContextProvider>
          <Navbar/>
          <TitleMain/>
          {/* <NFTMinter/> */}
          <LogoMain/>
        </WalletContextProvider>
      </NewContextProvider>
    </div>
  );
}
