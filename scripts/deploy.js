const main = async () => {
  const deployHelloWorld = await hre.ethers.deployContract("helloWorld");
  await deployHelloWorld.waitForDeployment();
  console.log("Contract deployed ", await deployHelloWorld.getAddress());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
