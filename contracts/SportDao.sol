// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract SportDao is ERC20, Ownable {
    uint public constant INITIAL_SUPPLY = 1 * (10 ** 5) * (10 ** 18);
    constructor() ERC20("SPORTDAO", "$SPORTS") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function mint(address to, uint amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external onlyOwner {
        _burn(msg.sender, amount);
    }
}
