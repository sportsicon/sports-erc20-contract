// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract SportDao is ERC20, Ownable {
    uint public constant INITIAL_SUPPLY = 1 * (10 ** 5) * (10 ** 18);
    constructor() ERC20("Sports DAO", "$SPORT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    /**
     * @dev Function mints the amount and sends them to the address
     *
     * @param to address where to mint the ERC20s
     *
     * @param amount ERC20s amount to mint
    */
    function mint(address to, uint amount) external onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Function burns the amount of the token from the sender address (onlyOwner can burn token)
     *
     * @param amount ERC20s amount to mint
    */
    function burn(uint256 amount) external onlyOwner {
        _burn(msg.sender, amount);
    }
}
