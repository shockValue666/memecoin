"use client";
import Address from "@/components/address";
import CallToActionButton from "@/components/call-to-action-button";
import Footer from "@/components/footer";
import LogoMain from "@/components/logo-main";
import Navbar from "@/components/navbar";
import NFTMinter from "@/components/nft-minter";
import SmallText from "@/components/small-text";
import TitleMain from "@/components/title-main";
import NewContextProvider from "@/lib/context/NewContextProvider";
import WalletContextProvider from "@/lib/context/WalletContextProvider";
import Image from "next/image";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  return (
    <div>
      <NewContextProvider>
        <WalletContextProvider>
          <Navbar/>
          <TitleMain/>
          {/* <NFTMinter/> */}
          <LogoMain/>
          <SmallText/>
          <div className="w-full flex justify-center">
            <CallToActionButton/>
          </div>
          <Address/>
          <Footer/>
        </WalletContextProvider>
      </NewContextProvider>
    </div>
  );
}
