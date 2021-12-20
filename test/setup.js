const { ethers } = require('hardhat');

const setup = async props => {
  const SportDao = await ethers.getContractFactory('SportDao');
  const SportDaoContract = await SportDao.deploy();

  return {
    SportDaoContract,
  }
}

module.exports = {
  setup,
}
