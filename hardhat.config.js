require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('hardhat-contract-sizer');

const { alchemyApiKey, privateKey } = require('./secrets.json');

module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 1
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`0x${privateKey}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: [`0x${privateKey}`]
    },
  },
  mocha: {
    timeout: 120000
  }
};
