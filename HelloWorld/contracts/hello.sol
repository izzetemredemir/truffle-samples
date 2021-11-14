// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
/*
contract HelloWorld {

    string private name;
    constructor(string memory _name ){

        name = _name;

    }

    function getName() public view returns ( string memory) {
        return name;
    }

    function setName(string memory _name) public{

        name = _name;
    }

}
*/


contract HelloWorld {

  string private name;
  mapping (address => uint256) public balance;

  constructor(){
    name = "test";
  
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function setName(string memory  _name) public {
    name = _name;
  }
}