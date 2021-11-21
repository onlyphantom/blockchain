---
title: "Transactions"
metaTitle: "Blockchain transactions and gas fees"
metaDescription: "This is some meta description"
date: 2021-11-01
author: Samuel Chan
keywords: ["hashing, algorithm, blockchain"]
---
import { Edit, StyledHeading, StyledMainWrapper } from '../src/components/styles/Docs';
import { Alert } from 'antd';
import Oracle from '../src/components/Oracle'


<StyledHeading>{props.frontmatter.metaTitle}</StyledHeading>

## Ethereum's Currency

Gas fees are paid in Ethereum's native currency, ether (ETH). Gas prices are denoted in gwei, which itself is a denomination of ETH - each gwei is equal to 0.000000001 ETH (<span className="math-inline">10^{-9}</span> ETH). For example, instead of saying that your gas costs 0.000000001 ether, you can say your gas costs 1 gwei. The word 'gwei' itself means 'giga-wei', and it is equal to 1,000,000,000 wei. Wei itself (named after Wei Dai, creator of b-money) is the smallest unit of ETH.

## Transaction fee
Processing transactions on Ethereum network requires computational power and gas is the fee paid to node operators for providing that computational power to include a transaction into the blockchain (thus altering the state of the blockchain). 

The more computation a transaction uses, the more gas is required. A transaction that sends ETH to 1 address would be computationally cheaper than a transaction that calls some arbitrarily complicated smart contract functions involving multiple addresses.

### Historical Overview

Historically (prior to The London Upgrade on August 5th, 2021), transaction fees on Ethereum are determined by the [Gas price](https://etherscan.io/chart/gasprice) * Gas units (gas used by the transaction). 

Supposed Alice wants to pay Bob 2 ETH, and that this transaction costs 21,000 units of gas, and the gas price is 200 gwei, the total fee would thus be:

= gas units \* gas price per unit  
= 21000 \* 200  
= 4,200,000 gwei (0.0042 ETH)

A sum of 2.0042 ETH would be deducted from Alice's account, and Bob would be credited 2 ETH. The remainder of 0.0042 is historically paid to the miners (validators). 

#### Gas Price vs Gas Unit
As a recap:

- **Gas price** on the Ethereum network is determined by the **demand and supply** forces
- While the unit of gas required is dependent on the computational cost to execute a contract 

In practice, since we have little control over the computational cost of a contract, as well as the supply of computation power to execute that contract, the gas fee we pay is largely dependent on how fast we want our transaction to be executed. 

Paying more gas fee increases the incentives of miners (validators) to include the transaction into a block.

#### Interactive Demo
The following Demo fetches an estimation of time (in seconds) for a transaction to be included on the Ethereum blockchain. 

If 💡 Price Recommendations is checked (default), it also optionally fetches the current Safe, Proposed and Gas Prices:

> You can obtain an API key for the following interactive example by registering for an account on [Etherscan](https://etherscan.io/)

<Oracle />

### EIP-1559 (August 5, 2021)
<Alert description="Safe/Proposed/Fast gas price recommendations are now modeled as Priority Fees." type="info" showIcon />

EIP-1559 changes Ethereum's market mechanisms for transaction fees. It replaces the first-price auction and replaces it with a fixed-price sale. 

This reduces the guesswork on gas required for each transaction since an explicit base fee for the next block is to be included. Users that want to prioritize their transaction can instead add a "tip" to pay the validators through setting a priority. 

In conclusion, because blocks on the blockchain have a fixed size, only a set amount of transactions can be included in any one block. When network activity becomes busy, setting a high **Max priority fee** on your transactions pushes it to the front of the queue by incentivizing the validators to consider this transaction first. 

<div style="width: 240px; margin-left: auto; margin-right: auto">

![gasfee on metamask](images/gasfee.png)

</div>

#### EIP-1559 Gas Burning

An example of interactive code:
```javascript react-live=true
const elem = <button style={{color: 'burlywood'}}>
                Change me to blue.
             </button>
render(elem)
```

### The London Upgrade


