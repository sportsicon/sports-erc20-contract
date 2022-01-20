const { expect } = require('chai');
const { ethers } = require('hardhat');

const { setup } = require('./setup');

let SportDaoContract;

describe('SportDao contract', () => {
  beforeEach(async () => {
    const utils = await setup();
    SportDaoContract = utils.SportDaoContract;
  });

  it('get name', async () => {
    expect(await SportDaoContract.name()).to.equal('Sports DAO');
  });

  it('get symbol', async () => {
    expect(await SportDaoContract.symbol()).to.equal('$SPORT');
  });

  it('check the initial supply', async () => {
    expect(await SportDaoContract.totalSupply()).to.equal(
      '100000000000000000000000'
    );
  });

  it('mint', async () => {
    await SportDaoContract.mint('0x47577e5EDf815cC4e2d8F6644296d80D382B1857', '100000000000000000000000');
    expect(await SportDaoContract.totalSupply()).to.equal(
      '200000000000000000000000'
    );
  });

  it('burn', async () => {
    await SportDaoContract.burn('50000000000000000000000');
    expect(await SportDaoContract.totalSupply()).to.equal(
      '50000000000000000000000'
    );
  });
});
