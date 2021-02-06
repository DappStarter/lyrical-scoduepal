require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth snow hospital good private foster seat'; 
let testAccounts = [
"0x7ab54397a37af67f80823776340e9bf05ca53cfd9d66b9b3a6c4e4f45a6e2728",
"0xeaa2ec8ce56b8df26878a9141bb8a34d46db0e22799aacd69d5b87060a9068e0",
"0xca3e6450a248541b60465286d07f7b1af246117d01b427e9a7bf541b57515884",
"0x909263b142d30dc7d8b820fd43963680d6ec42967d82ac9a9a4350abd1cd2495",
"0x63d4b0293bdd34c0e344e8ee4128a903634419df21d5bb73eb0ef1110c161a12",
"0xc2a24cc57d400d405e6e9ae4d7886abfc89ba9278058f7137bfea7eeaa0896c5",
"0x3a6ef286f076f11db4ae1966c12e60f1227185684741a43cba7bed1772091e27",
"0x1ff75a7f144e8c184b148bf423926ffa91a427ff7d887648a5f459ae52038226",
"0xbee82ba3dcfb092e90ee5a77b71b6c0fb07b82a76cf602cafa86ea1b96787d23",
"0x0130d7ef9543cd193938d08a8ebfc8f0492a2cbca2677fd19e5f5758914c0559"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
