---
title: "Guide: Learn Blockchain"
metaTitle: "Learn Blockchain (Interactive Workbook)"
metaDescription: "Learn Blockchain in an interative workbook"
date: 2022-01-01
author: Samuel Chan
keywords: ["encryption, decryption, aes, blockchain, bitcoin, cryptography 101"]
---

import React from 'react'
import { Alert } from 'antd';
import { Tags, Quote } from '../../src/components/reactComponents/utils/UX';
import Difficulty from '../../src/components/reactComponents/Difficulty';
import { PeBitcoin } from '../../src/components/quizComponents/Bitcoin'

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

LearnBlockchain is developed as an interactive workbook. You will learn while interacting
with live examples, interactive elements, quizzes and live code "sandbox". 

I've curated the main functionalities to help you make the most out of this interactive workbook. First on the list is an interactive knowledge check at the end of every module. 

<PeBitcoin />

<Alert message={<p>The correct answer for the last question, question (7), is 0 to 2^32. Go ahead and put that in, and scroll back up to see the score meter award you those undeserved points 😉.</p>} type="success" />


This workbook supports LaTeX, so we could have written <span className="math-inline">2^{32}</span>. In the Cryptography 101 chapter, you'll learn about Euler's Totient function, expressedly <span className='math-inline'>\phi(p^{n}) = p^{n-1}(p-1)</span>  

You will come across interactive code. Go ahead, change the block number (`blockNum`) to another number and see the results being rendered live.
```javascript react-live=true
// change blockNum to the block number you want to check

let blockNum = 721031
let reward = 50*1/(2**(Math.floor(blockNum/210000)))

render(<>
  <h3>Block Reward: {reward}</h3>
</>)
```

Wherever it make sense to do so, you'll see support for syntax highlighting as well to increase clarity:

```js
- javascript react-live=true hide-code
+ javascript react-live=true
```

This workbook uses ChartJS to render interactive charts:
<Difficulty />