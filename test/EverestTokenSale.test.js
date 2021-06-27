const Token = artifacts.require("Everest");
const TokenSale = artifacts.require("EverestTokenSale");

const { assert } = require("chai");
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;
require("dotenv").config({path: "../.env"});

contract("Token Sale Test", async (accounts) => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    it("should not have any tokens in my deployerAccount", async=>{
        let instance = Token.deployed();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));
    })
    
});