---
title: "Features"
metaTitle: "Learn Blockchain (Interactive Workbook)"
metaDescription: "Learn Blockchain in an interative workbook"
date: 2022-01-01
author: Samuel Chan
keywords: ["encryption, decryption, aes, blockchain, bitcoin, cryptography 101"]
---

import React from 'react'
import { Button, Alert } from 'antd'
import { Tags, Quote } from '../../src/components/reactComponents/utils/UX';
import Difficulty from '../../src/components/reactComponents/Difficulty';


<Tags name="Topics" list={
    [
        "Encryption",
        "Decryption",
        "AES",
        "Blockchain",
        "Bitcoin",
        "Cryptography 101"
    ]
} />


> Still under development. Follow [Samuel on Github](https://github.com/onlyphantom) to stay updated on the progress,

LearnBlockchain is developed as an interactive workbook. You will learn while interacting
with live examples, interactive elements, quizzes and live code "sandbox":

<Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
<Alert message="Success Text" type="success" />

An example of interactive code:
```javascript react-live=true
const elem = <button style={{color: 'seagreen'}}>
                Change me to blue.
             </button>
render(elem)
```

Interactive Charts:
<Difficulty />

You can manipulate the following code if we have `react-live=true` (provided `hide=code` is not appended):

```js
- javascript react-live=true hide-code
+ javascript react-live=true
```

```javascript react-live=true
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