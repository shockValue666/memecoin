import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
import * as web3 from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');

interface WalletContextProviderProps {
    children: React.ReactNode; 
}

const WalletContextProvider:React.FC<WalletContextProviderProps> = ({ children }) => {

    const endpoint = web3.clusterApiUrl('mainnet-beta');
    const wallets = [
        new walletAdapterWallets.PhantomWalletAdapter()
    ];


    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletContextProvider;