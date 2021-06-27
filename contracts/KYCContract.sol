// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract KYCContract{
    mapping(address => bool) allowed;

    function setKycCompleted(address _address) public{
        allowed[_address] = true;
    }

    function setKycRevoked(address _address) public{
        allowed[_address] = false;
    }

    function kycCompleted(address _address)public view returns(bool){
        return allowed[_address];
    }
}