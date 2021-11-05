---
title: "Transactions"
metaTitle: "Blockchain transactions and gas fees"
metaDescription: "This is some meta description"
date: 2021-11-01
author: Samuel Chan
keywords: ["hashing, algorithm, blockchain"]
---
import { Edit, StyledHeading, StyledMainWrapper } from '../src/components/styles/Docs';

<StyledHeading>{props.frontmatter.metaTitle}</StyledHeading>

### Transaction fee

The transaction fee on Ethereum is determined by the formula:

<div className="math-display">
{'\\frac{\\text{m}}{\\text{s}^2}'}
</div>


Some inline math, coming right up. <span className="math-inline">T_n = a + (n-1)d * e_t</span>

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