---
title: "Transactions"
metaTitle: "Blockchain transactions and gas fees"
metaDescription: "This is some meta description"
date: 2021-11-01
author: Samuel Chan
keywords: ["hashing, algorithm, blockchain"]
---
import { Edit, StyledHeading, StyledMainWrapper } from '../src/components/styles/Docs';
import { Input } from 'antd';
import Oracle from '../src/components/Oracle'


<StyledHeading>{props.frontmatter.metaTitle}</StyledHeading>

### Ethereum's Currency

Gas fees are paid in Ethereum's native currency, ether (ETH). Gas prices are denoted in gwei, which itself is a denomination of ETH - each gwei is equal to 0.000000001 ETH (<span className="math-inline">10^{-9}</span> ETH). For example, instead of saying that your gas costs 0.000000001 ether, you can say your gas costs 1 gwei. The word 'gwei' itself means 'giga-wei', and it is equal to 1,000,000,000 wei. Wei itself (named after Wei Dai, creator of b-money) is the smallest unit of ETH.

### Transaction fee
Processing transactions on Ethereum network requires computational power and gas is the fee paid to node operators for providing that computational power to include a transaction into the blockchain (thus altering the state of the blockchain). 

The more computation a transaction uses, the more gas is required. A transaction that sends ETH to 1 address would be computationally cheaper than a transaction that calls some arbitrarily complicated smart contract functions involving multiple addresses.

Historically (prior to The London Upgrade on August 5th, 2021), transaction fees on Ethereum are determined by the [Gas price](https://etherscan.io/chart/gasprice) * Gas units (gas used by the transaction). 

Supposed Alice wants to pay Bob 1 ETH, and the gas price is 

<Oracle />

#### Gas Price


An example of interactive code:
```javascript react-live=true
const elem = <button style={{color: 'burlywood'}}>
                Change me to blue.
             </button>
render(elem)
```


```javascript react-live=true hide-code
const App = () => {

    const [val, setVal] = React.useState(1704)

    return (
        <div>
            <h1>Hashing</h1>

            <p>
                {val} Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas tenetur dignissimos 
                <br/> Aspernatur, corrupti repellat debitis officia, odit doloribus consequatur unde amet similique ipsum laborum eveniet, maxime saepe. Inventore aliquam consequatur perferendis iste veritatis mollitia veniam odit.
            </p>
        </div>
    )
}
render(App)
```