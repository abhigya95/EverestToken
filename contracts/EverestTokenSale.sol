// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
import "./Crowdsale.sol";
import "./KYCContract.sol";

contract EverestTokenSale is Crowdsale{

KYCContract kyc;

    constructor(
         uint256 rate, 
         address payable wallet,
         IERC20 token,
         KYCContract _kyc
         )
    
    Crowdsale(rate, wallet, token)
    public{
            kyc = _kyc;
    }

     function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
       super._preValidatePurchase(beneficiary, weiAmount);
       require(kyc.kycCompleted(msg.sender), "KYC NOT COMPLETED, purchase not allowed!");
    }
}