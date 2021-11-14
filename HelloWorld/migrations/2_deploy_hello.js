
const hello = artifacts.require('./HelloWorld');

const helloSettings = {
  name: "Emre"
}

module.exports = function(deployer){
  deployer.deploy(hello);
};