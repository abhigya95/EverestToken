var EverestToken = artifacts.require("./Everest.sol");

module.exports = async function(deployer){
    await deployer.deploy(EverestToken, 8850);
}