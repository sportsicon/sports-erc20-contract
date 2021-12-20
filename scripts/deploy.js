async function main() {
  const sportDao = await ethers.getContractFactory("SportDao");

  console.log("Deploying SportDao...");
  const SportDao = await sportDao.deploy();
  console.log("SportDao deployed to:", SportDao.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
