var EverestToken = artifacts.require("./Everest.sol");
var EverestTokenSale = artifacts.require("./EverestTokenSale.sol");
require("dotenv").config({path: "../.env"});

module.exports = async function(deployer){
    const initialSupply = process.env.INITIAL_TOKENS;
    let address = await web3.eth.getAccounts();
    await deployer.deploy(EverestToken, initialSupply);
    await deployer.deploy(EverestTokenSale, 1, address[0], EverestToken.address);
    let instance = await EverestToken.deployed();
    instance.transfer(EverestTokenSale.address, initialSupply);
}