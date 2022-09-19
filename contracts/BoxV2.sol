
// contracts/Box.sol
// SPDX_License_Identifier: MIT
pragma solidity ^0.8.0; 
import "./Box.sol";


import "@opengsn/contracts/src/ERC2771Recipient.sol";

contract BoxV2 is Box, ERC2771Recipient {


    function setTrustedForwader(address _trustedForwader) public {
         _setTrustedForwarder(_trustedForwader);
    }

    function versionRecipient() external pure  returns (string memory) {
        return "1";
    }

}