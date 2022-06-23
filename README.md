# Project Atom

Project Atom is an NFT collection. The repository includes front-end elements as well as the smart contract

## What to to do before running the project
Change values in .example_env file and name it .env
Change rpc url and contract wallet address in Contract.js file

## Useful scripts to initialize a new project
npm install hardhat
npx hardhat
npm install @openzeppelin/contracts
npm install @nomiclabs/hardhat-etherscan
npm install dotenv
npx hardhat clean
npx hardhat compile
npx hardhat run 
npx hardhat run ./scripts/deployMyNFT.js --network rinkeby "contract address"

