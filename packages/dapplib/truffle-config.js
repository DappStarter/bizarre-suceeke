require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note soccer property grace clip sun gentle'; 
let testAccounts = [
"0x42effa7712f0316c70d88e3cca3f50e2fdfaee84e9c4e13c6bec42dc090c2edc",
"0xd32234aef976e4c96388af96bccb228fa5e719554e3277f52ebb554330663c68",
"0x866bae3d96ed55b8d0dc29fbb3e952a6c4167e2e13f6f22318b098b4d964d7a7",
"0xe5c4b72ba804c5bdf8142b9c7d6436c4a2ed187095e442a5b8340a9cf8bda32e",
"0xe222840cdbe7af92c345c10a4a4626289007154de78cd5ba0e8264e660ca688a",
"0x795d030bb70dbc8fa23186bffda4f26296bbecabbd128b7725c88fb9997730f6",
"0x179ca1feeaf0dbbeec80f6343a3d2f0468364f76f4b1c1e084cc2c4e03e23773",
"0xdc20b4a47d210239c5555ce6ffa7bd2c335e3d7535c31799f5d07be16ffb25fa",
"0x728a26bd1886fab02a002795c7afe04f876d41a5947365587ae40a76879203bf",
"0x4cfcd635522855a48736b073d0fd476c8806c6e2f2822319d8514c41fbe87b2b"
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
