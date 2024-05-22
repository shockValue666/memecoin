"use client";
import React, { useState } from 'react'
// throws notifications for user friendly error handling
import { toast } from 'react-toastify';
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
// imports icons
// import { ExternalLinkIcon } from '@heroicons/react/outline';
// import {} from '@heroicons/react/outline'
import { BeakerIcon } from '@heroicons/react/24/solid'
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import logo from'../../public/logo.jpg'
import dynamic from 'next/dynamic';
const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);





// const nftImageUrl = "https://nathan-galindo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.614ae0c9.jpg&w=640&q=75";
const nftImageUrl = "https://prod-tensor-creators-s3.s3.us-east-1.amazonaws.com/drop-metadata/95a4f9d2-a4a4-4c1f-9fb6-564725052b15/images/168.png";
const nftExternalUrl = "https://www.google.com/";



const NFTMinter = () => {
    const [apiUrl,setApiUrl] = useState<string>("");
    const [nft,setNft] = useState<string>("");
    const [nftImage,setNftImage] = useState<string>("");

    const connection = useConnection();
    const { publicKey } = useWallet();
    console.log("publicKey",publicKey?.toBase58())


    //mint compressed nft
    const mintCompressedNFT = async (event:{preventDefault:()=>void}) => {
        event.preventDefault();
        //api call
        // make api call to create cNFT
        console.log("here, apiurl: ",apiUrl, "network: ",connection.connection)
        const response1 = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            jsonrpc: '2.0',
            id: 'my-id',
            method: 'getAssetsByOwner',
            params: {
                ownerAddress: 'BYM7pC22vUBSVuFPpTdoaH8RqZqr7SH3F2fxYXQ4sbMS',
                page: 1, // Starts at 1
                limit: 1000,
            },
            }),
        });
        const result1 = await response1.json();
        console.log("Assets by Owner: ", result1.result.items);
    
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 'helius-fe-course',
                method: 'mintCompressedNft',
                params: {
                    name: "some name",
                    symbol: 'sn',
                    owner: publicKey,
                    description:
                        "some nft probably nothing probably 1m tokens",
                    attributes: [
                        {
                            trait_type: 'a lot of money',
                            value: 'fr',
                        },
                    ],
                    imageUrl: nftImageUrl,
                    externalUrl: nftExternalUrl,
                    sellerFeeBasisPoints: 0,
                    confirmTransaction:true
                },
            })
        });
        console.log("here: ",)
        const result = await response.json();
        console.log("RESULT", result);

        if (!result) {
            toast.error("Request failed")
            throw "Request failed"
        }

        setNft(result.result.assetId);

        fetchNFT(result.result.assetId, event);
    }

    // fetch nft after it's minted
    const fetchNFT = async (assetId: string, event: { preventDefault: () => void }) => {
        // prevent app from reloading
        event.preventDefault();

        // api call to fetch nft
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaiton/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 'my-id',
                method: 'getAsset',
                params: {
                    id: assetId
                }
            })
        });

        // extrapolate api response
        const { result } = await response.json();

        // set nft image in state variable
        setNftImage(result.content.links.image);

        // return api result
        return { result };
    };

    const outputs = [
        {
            title: 'Asset ID...',
            dependency: nft,
            href: `https://xray.helius.xyz/token/${nft}?network=devnet`,
        }
    ];

    // set api url onload
    React.useEffect(() => {
        // setApiUrl(
        //     connection.rpcEndpoint.includes("devnet")
        //         ? "https://devnet.helius-rpc.com/?api-key=23aabe59-1cbe-4b31-91da-0ae23a590bdc"
        //         : "https://mainnet.helius-rpc.com/?api-key=23aabe59-1cbe-4b31-91da-0ae23a590bdc"
        // );
        // setApiUrl("https://devnet.helius-rpc.com/?api-key=d1fc2eeb-2efa-417f-954d-750ab9f03157")
        setApiUrl("https://mainnet.helius-rpc.com/?api-key=d1fc2eeb-2efa-417f-954d-750ab9f03157")
        // setApiUrl("https://rpc.shyft.to?api_key=f0xNYy1gQAe0Y1ey")
    }, [connection]);


  return (
    <div className='flex flex-col w-full justify-center items-center my-10'>
        <div className='flex border border-white items-center gap-x-4'>
            <h1 className='text-8xl'>nftminter</h1>
            {/* <WalletMultiButton/> */}
            <WalletMultiButtonDynamic/>
        </div>
        <div className='max-w-7xl grid grid-cols-1 sm:grid-cols-6 gap-4 p-4 text-white'>
            <form action="" onSubmit={event=>mintCompressedNFT(event)} className='rounded-lg min-h-content bg-[#2a302f] p-4 sm:col-span-6 lg:col-start-2 lg:col-end-6'>
                
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg sm:text-2xl font-semibold'>cNFT minter</h2>
                    <button 
                        type="submit" 
                        className='bg-helius-orange rounded-lg py-1 sm:py-2 px-4 font-semibold transition-all duration-200 border-2 border-transparent hover:border-helius-orange disabled:opacity-50 disabled:hover:bg-helius-orange hover:border-transparent disabled:cursor-not-allowed' 
                        disabled={!publicKey || !connection}
                    >
                        Mint
                    </button>
                </div>
                
                <div className='text-sm font-semibold mt-8 bg-[#222524] border-2 border-gray-500 rounded-lg p-2'>
                    <ul className='p-2'>
                        {outputs.map(({title,dependency,href},index)=>(
                            <li key={index} className={`flex justify-between items-center ${index !== 0 && 'mt-4'}`}>
                                <p className='tracking-wider'>{title}</p>
                                {
                                    dependency && (
                                        <a 
                                            href={href}
                                            target='_blank'
                                            rel='noreferrer noopener'
                                            className='flex text-[#80ebff] italic hover:text-white transition-all duration-200'
                                        >  
                                            {dependency.toString().slice(0, 25)}...
                                            <BeakerIcon className='w-5 ml-1' />
                                        </a>
                                    )
                                }
                            </li>           
                        ))}
                    </ul>
                </div>

                <div className='mt-8 bg-[#222524] border-2 border-gray-500 rounded-lg p-4 h-[400px] flex justify-center items-center'>
                        {
                            nftImage ? (
                                <img
                                    width={300}
                                    height={300}
                                    src={nftImage}
                                    className='rounded-lg border-2 border-gray-500'
                                />
                            ):(
                                <p className='border-2 border-gray-500 text-gray-500 p-2 rounded-lg'>NFT Image Goes Here</p>
                            )
                        }
                </div>
            </form>
        </div>
    </div>
  )
}

export default NFTMinter