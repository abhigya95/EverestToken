const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Mnemonic = process.env.MNEMONIC;
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/sc/contracts"),
  networks: {
    development: {
      port: 7545,
      host:"127.0.0.1",
      network_id: 5777
    },
    ganache_local:{
      provider: function(){
        return new HDWalletProvider(Mnemonic, "http://127.0.0.1:7545", AccountIndex);
      },
      network_id: 5777
    },
    ropsten_infura:{
      provider: function(){
        return new HDWalletProvider(Mnemonic, "https://ropsten.infura.io/v3/9d2e5cf4768e45c4bc5bd8f0486eb53c", AccountIndex);
      },
      network_id: 5
    }
  },
  compilers:{
    solc:{
      version: "^0.8.6"
    }
  }
};
