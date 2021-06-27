var EverestToken = artifacts.require("./Everest.sol");
var EverestTokenSale = artifacts.require("./EverestTokenSale.sol");

module.exports = async function(deployer){
    const initialSupply = 10000;
    let address = await web3.eth.getAccounts();
    await deployer.deploy(EverestToken, initialSupply);
    await deployer.deploy(EverestTokenSale, 1, address[0], EverestToken.address);
    let instance = await EverestToken.deployed();
    instance.transfer(EverestTokenSale.address, initialSupply);
}