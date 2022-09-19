// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Box upgrading");
   await upgrades.upgradeProxy(
    "0x8eB7b0da8564e87973F1BEe2B96654464a369bBC",
     BoxV2
     );
  console.log("Box upgraded");
}

main();