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


<StyledHeading>{props.frontmatter.metaTitle}</StyledHeading>

### Ethereum's Currency

Gas fees are paid in Ethereum's native currency, ether (ETH). Gas prices are denoted in gwei, which itself is a denomination of ETH - each gwei is equal to 0.000000001 ETH (<span className="math-inline">10^{-9}</span> ETH). For example, instead of saying that your gas costs 0.000000001 ether, you can say your gas costs 1 gwei. The word 'gwei' itself means 'giga-wei', and it is equal to 1,000,000,000 wei. Wei itself (named after Wei Dai, creator of b-money) is the smallest unit of ETH.

### Transaction fee

Historically (prior to The London Upgrade on August 5th, 2021), transaction fees on Ethereum are determined by the [Gas price](https://etherscan.io/chart/gasprice) * Gas units (gas used by the transaction). 

Supposed Alice wants to pay Bob 1 ETH, and the gas price is 


```javascript react-live=true
const App = () => {

    const [val, setVal] = React.useState({})
    React.useEffect(()=>{
        fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken')
        .then(res => res.json())
        .then(data => setVal(data.result))
    }, [])

    return (    
        <div>
            <h2>Gas Oracle from Etherscan</h2>
            <Input.Password placeholder="Enter your Etherscan API key" style={{width: '80%'}} />
            <br/>
            <Input placeholder="Amount of ETH To Transfer" style={{width: '50%'}} />
            <button>Transfer</button>
            <p>
                {JSON.stringify(val)} 
            </p>
        </div>
    )
}
render(App)
```

#### Gas Price


An example of interactive code:
```javascript react-live=true
const elem = <button style={{color: 'seagreen'}}>
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