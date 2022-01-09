---
title: "Features"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
date: 2021-11-25
author: Samuel Chan
keywords: ["encryption, decryption, aes, blockchain, bitcoin, cryptography 101"]
---

import React from 'react'
import { Button, Alert } from 'antd'
import { Tags, Quote } from '../src/components/reactComponents/utils/UX';

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

```javascript
- const data = ['1','2'];
+ const data = [1,2];
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