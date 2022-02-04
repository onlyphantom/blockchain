---
title: "Learn Blockchain (Introduction)"
metaTitle: "Blockchain 101 (an Introduction)"
metaDescription: "Learn Blockchain from First Principles"
---

import React from 'react'
import { Button, Alert, Timeline } from 'antd'
import { Tags, Quote } from '../src/components/reactComponents/utils/UX';
import { LinkOutlined } from '@ant-design/icons';


<Tags name="Topics" list={
    [
        "Blockchain",
        "Bitcoin",
        "Learn Blockchain",
        "Cryptography"
    ]
} />

## Motivation
Bitcoin and the blockchain technology ushered in a new era. 
It "<b>developed the foundation for a new digital theory of property rights</b>" (Nakamoto.com).

If your introduction to the field is through YouTube videos and social media, you may find 
that the education on this topic is severely lacking compared to the amount of content that encourages 
reckless speculation in the crypto-currency market. 


<Quote 
    text="Blockchain isn't about money. It isn't even about transactions. It is the creation of a new form of trust and ownership, backed by verifiable cryptographic truth." 
    src="Supertype"
    author="Samuel Chan"
    img="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_150,h_150/https://supertype.ai/wp-content/uploads/2020/12/IMG_8266.jpg"
    cover={true}
/>

We wanted to create an interactive workbook that help the average reader 
learn about the engineering marvel of blockchain, the Bitcoin protocol, 
and the cryptographic ideas that made the Bitcoin protocol possible. It is created 
to facilitate a self-learning approach guided by interactive quizzes, live code editors, and other interactive elements to 
help the reader acquire theoretical knowledge through experimentation.

It is our belief that an education-first approach to cryptography will be the best way to acquire an appreciation for the underlying principles of blockchain, and thus increase the 
adoption of blockchain technology. 

## Content
If you'd like an illustrative infographic-style depiction of Bitcoin transaction lifecyle, this is one from wiki.p2pfoundation.com. Clicking on the 
image opens it in full size in a new tab.

![](images/bitcoinworks.jpeg)

You can consume the workbook in the order that best made sense for you since most chapters are fairly self-contained.
If you are new to cryptography and blockchain, you may want to begin your journey in the following order:

<Timeline>
    <Timeline.Item>
        <a href="/cryptography">
            <Button type="primary" shape="round" icon={<LinkOutlined />}>
                Cryptograhy 101
            </Button>
        </a>
        <p>
            Learn the basics of classical and modern cryptography, including how to encrypt and decrypt data, RSA, and the Advanced Encryption Standard (AES).
        </p>
    </Timeline.Item>
    <Timeline.Item>
        <a href="/cryptography-in-blockchain">
            <Button type="primary" shape="round" icon={<LinkOutlined />}>
                Cryptograhy in Blockchain
            </Button>
        </a>
        <p>
            Understand the role of encryption and modern cryptography in blockchain, with an emphasis on hashing, SHA-2, SHA-3 and Merkle trees. 
        </p>
    </Timeline.Item>
    <Timeline.Item>
        <a href="/bitcoin">
            <Button type="primary" shape="round" icon={<LinkOutlined />}>
                How Bitcoin Works
            </Button>
        </a>
        <p>
            An in-depth look at the Bitcoin protocol, including its block generation mechanism, proof-of-work and bitcoin mining.
        </p>
    </Timeline.Item>

</Timeline>
