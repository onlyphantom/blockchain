---
title: "Cryptography 101"
metaTitle: "Understanding the cryptography concepts used in development of blockchain protocols"
metaDescription: "Precursor to understanding the cryptography concepts that inspire Blockchain and the original Bitcoin protocol"
date: 2021-11-25
author: Samuel Chan
keywords: ["hashing, ethereum, blockchain"]
---
import { Alert } from 'antd';
import XOR from '../src/components/reactComponents/XOR'

# Cryptography
A blockchain is a chain of blocks (an array of data) linked together through clever use of cryptography. To truly appreciate the design of blockchain, one is well served by his/her understanding of the cryptographic primitives underlying blockchain.

Broadly speaking, we can classify cryptography into one of two forms: symmetric and asymettric cryptography.

## Symmetric cryptography
Also called **secret key cryptography** or **shared key cryptography**, symmetric cryptography uses a key to encrypt the data and the same key for decrypting the data. This key must be agreed on before the data exchange take place between the communicating parties.

To understand this, move onto the first experiment to see how we can use the XOR Cipher to build a simple cryptography model that provides an encryption / decryption service.

### Experiment 1
- The XOR Cipher is one of the most common cryptographic technique that sits right at the heart of many modern day ciphers  
- XOR is a logical operator, which transforms binary digits through an "Exclusive OR" filter ("logic gate", with the symbol ⊕)
- Each key on the keyboard is already represented by a number known as the ASCII code. Since there's 8 bits to a byte, this means each key is a combination of 8 binary code. This includes characters accented characters such as `é` even if such a character key may not be present on your keyboard

<XOR />

## Asymmetric cryptography




## Practical Exercises
- [ ] Use the XOR [Experiment](#experiment1) set up above, paste the following value `` into the plain text field and observe the relationship between the input, the ASCII and the Binary. Compare this to [Wikipedia's ASCII control code chart](https://en.wikipedia.org/wiki/ASCII#Control_code_chart) to strengthen your understanding of this subject
