require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
// require("@openzeppelin/hardhat-ethers");
const {config} = require("dotenv");
const {resolve} = require("path");
config({ path: resolve(__dirname,"./.env")})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url: "https://polygon-testnet.public.blastapi.io",
      chainId: 80001,
      accounts:[`${process.env.TESTNET_PRIVATE_KEY}`] 
    }
  }
};
