const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "265e73b55a2f48e388d1ae298e3488e6";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.6.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};