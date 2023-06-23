import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from '@particle-network/connect-react-ui';
import { WalletEntryPosition } from '@particle-network/auth';
import { Ethereum, EthereumGoerli, Aurora, AuroraTestnet } from '@particle-network/common';
import { evmWallets } from '@particle-network/connect';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider
            options={{
                projectId: 'e1e9e218-4bff-415a-80c4-eb705ccedcb6', //replace with your projectId
                clientKey: 'rcxPyzVcUehW8RndWkDujJhoW7sgQh4AALemd7vJg', //replace with your clientKey
                appId: '8c01b72a-0cca-4aab-afd8-34b421759646', //replace with your appId
                chains: [
                    Ethereum,
                    EthereumGoerli,
                    Aurora,
                    AuroraTestnet
                ],
                particleWalletEntry: {    //optional: particle wallet config
                    displayWalletEntry: true, //display wallet button when connect particle success.
                    defaultWalletEntryPosition: WalletEntryPosition.BR,
                    supportChains:[
                        Ethereum,
                        EthereumGoerli,
                        Aurora,
                        AuroraTestnet
                    ],
                    customStyle: {}, //optional: custom wallet style
                },
                securityAccount: { //optional: particle security account config
                    //prompt set payment password. 0: None, 1: Once(default), 2: Always
                    promptSettingWhenSign: 1,
                    //prompt set master password. 0: None(default), 1: Once, 2: Always
                    promptMasterPasswordSettingWhenLogin: 1
                },
                wallets: evmWallets({ qrcode: false }),
            }}
            theme={'auto'}
            language={'en'}   //optional：localize, default en
            walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
            particleAuthSort={[    //optional：display particle auth items and order
                'email',
                'phone',
                'google',
                'apple',
                'facebook'
            ]}
        >
            <App />
        </ModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
