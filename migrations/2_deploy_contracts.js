var EverestToken = artifacts.require("./Everest.sol");
var EverestTokenSale = artifacts.require("./EverstTokenSale.sol");

module.exports = async function(deployer){
    const initialSupply = 10000;
    let address = await web3.eth.getAccounts();
    await deployer.deploy(EverestToken, initialSupply);
    await deployeer.deploy(EverestTokenSale, 1, address[0], EverestToken.address);
    let instance = await MyToken.deployed();
    instance.transfer(MyTokenSale.address, initialSupply);
}