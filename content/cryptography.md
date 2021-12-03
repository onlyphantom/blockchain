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

## Cryptography
A blockchain is a chain of blocks (an array of data) linked together through clever use of cryptography. To truly appreciate the design of blockchain, one is well served by his/her understanding of the cryptographic primitives underlying blockchain.

Broadly speaking, we can classify cryptography into one of two forms: symmetric and asymettric cryptography.

## Symmetric cryptography
Also called **secret key cryptography** or **shared key cryptography**, symmetric cryptography uses a key to encrypt the data and the same key for decrypting the data. This key must be agreed on before the data exchange take place between the communicating parties.

To understand this, move onto the first experiment to see how we can use the XOR Cipher to build a simple cryptography model that provides an encryption / decryption service. Since computer store text as numbers, our plain string 

### Experiment 1
- The XOR Cipher is one of the most common cryptographic technique that sits right at the heart of many modern day ciphers  
- XOR is a logical operator, which transforms binary digits through an "Exclusive OR" filter ("logic gate", with the symbol ⊕)
- Each key on the keyboard is already represented by a number known as the ASCII code. Since there's 8 bits to a byte, this means each key is a combination of 8 binary code. This includes characters accented characters such as `é` even if such a character key may not be present on your keyboard

#### Instructions
 
1. Go ahead and write a plain text message (keep it to within 12 characters for this exercise). This may be a keyphase to your security safe somewhere, or it could be a secret code to a vault that nobody else should have access to. 
2. Now, enter an 8-bit **binary key**, which in layman terms, mean a string of 8-digit 0s and 1s. This key is used to perform the XOR cipher, and nobody else should know this key except for its intended audience (sender and receiver).
3. Notice how your string is first converted into ASCII, and then its binary representation. When you hit **encrypt**, the XOR Cipher is performed, resulting in our cipher text. We can thus mail this message out over an email service, chat provider, or just any other communication medium ("channel").
4. The intended receiver of this cipher text would have the key you entered in (3), allowing him/her to perform the XOR cipher, in effect reversing the encryption process. This decryption process works because XOR is an [involutory function](https://en.wikipedia.org/wiki/Involution_(mathematics)), or "self-inverse" function. Any other person (whether a malicious adversary or not) might intercept the message but would have to also know the key in order to correctly decipher the mssage or risk entering an incorrect password.

<XOR />

As we've seen from the experiment above, symmetric cryptography ("secret key cryptography", "shared key cryptography") requires that the sender and receiver have agreed on the key. Once that is established, it did not matter that the adversary have undesired knowledge of other pieces of the encryption algorithm because they would still need to expend considerable effort into decrypting the message without knowing the key. In the experiment above, we could have chosen for the hexadecimal notation instead of ASCII representation as they also, conveniently, provides a one-to-one correspondence between the hex digit and a 4-bit string ("nibble"). The adversary, having learned of this, would still require knowledge of the key or resort to using other methods such as through a brute force algorithm.

<div style="width: 240px; margin-left: auto; margin-right: auto">

![Hexadecimal](images/hextable.png)

</div>

Block ciphers and stream ciphers are two categories of symmetric cryptography. Popular examples of block ciphers include the Data Encryption Standard (DES) and Advanced Encryption Standard (AES), the latter of which is used by Bitcoin Core (and many other cryptocurrency services) to encrypt its wallet.

## Asymmetric cryptography
In the experiment we see earlier, the sender and receiver has to first establish and agree upon a key in advance. Therein lies a problem: what if the sender's message gets intercepted, along with the key, in its transmission to the receiver? 

Ron Rivest, Adi Shamir and Leonald Adleman proposed an idea: using two different keys, one for encryption and the other for decryption. This type of cryptography is referred to as asymmetric cryptography.



## A note on modern cryptography
At this point, I should stress that the XOR Cipher experiment you've seen are merely illustrative and greatly simplified for pedagogical reasons. With a longer input (eg. plain text), our key would now have to be repeated such that patterns may emerge to any adversary. If the key is exactly of the same length as the input, then there would be no repeats (one-time padding), meaning that with sufficient randomness and key length, the XOR that we implemented would still present a rather formidable challenge.

Almost all of modern ciphers (including [AES](#aes), Keccak and SHA-2) feature the use of XOR Cipher as a key component but techniques such as permutations and confusions lend the algorithm other much-desired features that we will discuss in details in the following section.


## Hexadecimals
### Text to Hexadecimals
Supposed we'd like to substitute parts of the [Experiment 1](#experiment1), to use Hexadecimal  instead of ASCII, we will first convert our plain text into hexadecimal, and then perform the hexadecimal-to-binary conversion before applying the key to product our cipher text.

To illustrate, a input of (plain text) of `Supertype` will output `53 75 70 65 72 74 79 70 65`. The first character of the hex `53` will output a binary of `1010011`, and so on and so forth. 

The mapping of `53` to `1010011` isn't arbitrary. The `5` in Hex correspond to the 4 binary digits `0101` and the `3` correspond to `0011`. Together, they form `01010011`, and without the leading zeros that would be `1010011`.

Note that the hex value of the uppercase `S` symbol is 53 but the lowercase `s` is 73.

### Decimal to Hexadecimal
Hexadecimal is also a way of storing integers in base 16 rather than the usual decimal base that we commonly use. We commonly use a 10-digit system, but with hexadecimal we have 16-digit -- the numbers 0 through 9 as well as the letters A through F. These 16 hexadecimal digits correspond to a different value in the range of 0 to 15. As mentioned in the earlier section, each hexadecimal digit also has a one-to-one correspondence to a 4-bit binary string. These correspondences, as we've also learned above, are not arbitrary. `5` in in Hex correspond to the 4 binary digits `0101` and the `3` correspond to `0011`. 

To compute from the 4-digit binary to decimal, we take the sum of binary digits (<span className="math-inline">d_{n}</span>) multiplied by <span className="math-inline">2^n</span>:

<div className="math-display">
{'decimal = d_0 \\cdot 2^0 + d_1 \\cdot 2^1 + d_2 \\cdot 2^2 + ...'}
</div>

The letter `E`, with the binary string of `1110` is hence <span className="math-inline">2^0 \cdot 0 + 2^1 \cdot 1 + 2^2 \cdot 1 + 2^3 \cdot 1 = 14</span>.

<div style="width: 180px; margin-left: auto; margin-right: auto">

![Hexadecimal](images/hextable.png)

</div>

So in the case of our familiar base 10 decimal system, each position of a digit has 10 times the value of the previous position, in the binary each position of a digit has value 2 times that of the previous position. In hexadecimal, each position of a digit has 16 times the value of the previous position. We can therefore expand on the examples and perform a hexadecimal-to-decimal conversion.

Hexadecimals are often prefixed with `0x` to indicate that it's in hexadecimal format. When we see a hexadecimal like `0x20`, the arithemtic we perform would be <span className="math-inline">16^0\cdot0 + 16^1\cdot2 = 32</span>.

To convert the hexadecimal `0xDE` we would apply the same formula, noting that `D` and `E` correspond to `13` and `14` respectively:
<span className="math-inline">16^0\cdot14 + 16^1\cdot13 = 14 + 208 = 222</span>

We can also very quickly refer to the table and see that `D` corresponds to `1101` and `E` corresponds to `1110`, giving us a binary of `11011110`.

### Private Keys in Hexadecimal

A randomly generated private key for Bitcoin is a 256-bit (32 bytes) number, or 64 characters in the range of 0-9 or A-F. They are 256-bit numbers randomly chosen in the range specified by the `secp256k1` ECDSA curve recommendation. An example private key is:

```
E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262
``` 

Nearly every 256-bit number is a valid ECDSA private key. Specifically, any 256-bit number from `0x1` to `0xFFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFE BAAE DCE6 AF48 A03B BFD2 5E8C D036 4140` is a valid private key. This is due to the requirement of the key [being smaller than n, the size of the group](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Key_and_signature-size) specified by ECDSA. There is a small space of numbers that fit within 256 bits but is greater than [`n`](https://www.google.com/search?q=115792089237316195423570985008687907852837564279074904382605163141518161494337&oq=115792089237316195423570985008687907852837564279074904382605163141518161494337&aqs=chrome..69i57.288j0j1).
So the private key space is <span className="math-inline">≈2^{256}</span> (or <span className="math-inline">≈10^{77}</span>), an astronomically large amount. The visible universe is estimated to contain 10^80 atoms.


## AES
Vincent Rijmen and Joen Daemen submitted an entry to the National Institute of Standard and Technology's (NIST) competition to select an Advanced Encryption Standard that would replace DES. Their submission won and was thus selected as the Advanced Encryption Standard. 

![Advanced Encryption Standard (AES)](images/aes.png)

Depending on the key sizes (128, 192 and 256 bits), we get different variants of AES. All three variants use a 128-bit block size, which means it produces 128 bits of cipher text along with a key from a given 128-bit of input message. 

16 bytes (128 bits) conveniently fits a 4x4 grid, and AES hence uses a 4x4 column-major order  matrix as representation for its internal state ("state array"). 

Supposed the message is "SupertypePowered", the hexadecimal would be `53 75 70 65 72 74 79 70 65 50 6f 77 65 72 65 64` and the state array would be:

<div className="math-display">
{'\\begin{bmatrix} 53 & 72 & 65 & 65 \\\\ 75 & 74 & 50 & 72 \\\\ 70 & 79 & 6f & 65 \\\\ 65 & 70 & 77 & 64 \\end{bmatrix}'}
</div>

The encryption process begins by bringing in the initial key (`AddRoundKey`) and perform the XOR. Since the rest of the algorithm are rather publicly documented, this operation is what actually provides the "secrecy" to our algorithm. This is also the only phase of AES encryption where the key is directly used. After the initial round, the AES Key Schedule produces a set number (10, 12, or 14 for the 128, 192 and 256-bit variants respectively) of **round keys** from the initial key ("Key Expansion"). These round keys are used as input to the `AddRoundKey` operations and so a different key is used for each round.

When we start doing our rounds, we begin with (1) **confusion** through substitution of bytes (`SubBytes`), and (2) perform **permutations** by shifting the rows (`ShiftRows`) and mixing the columns (`MixColumns`).

`SubBytes` are performed following the table below. For the first value in our 4x4 matrix (state array), that's 53 (`S`). Running it through the S-Box would transform this value from 53 to `ED` (`í` in ASCII). The last value `d`, put through `SubBytes` would be `C` in ASCII.
 
![](images/sbox.jpg)

This table isn't arbitrary either. It implements multiplication in [Galois Field](https://en.wikipedia.org/wiki/Finite_field_arithmetic) <span className="math-inline">GF(2^{8})</span>. This is a non-linear function, which is a great property for a cipher; In addition to that, no bytes would result in itself from the substitution and there are also no directly opposite substitutions (meaning all the bytes are switched).

`ShiftRows` shifts each row to the left by a value corresponding to their row index. The top row is not shifted, and each subsequent row shifted by an increment of one:

<div className="math-display">
{'\\begin{bmatrix} 53 & 72 & 65 & 65 \\\\ 75 & 74 & 50 & 72 \\\\ 70 & 79 & 6f & 65 \\\\ 65 & 70 & 77 & 64 \\end{bmatrix} \\rightarrow\\begin{bmatrix} 53 & 72 & 65 & 65 \\\\ 74 & 50 & 72 & 75 \\\\ 6f & 65 & 70 & 79 \\\\ 64 & 65 & 70 & 77 \\end{bmatrix}'}
</div>

Similar to `ShiftRows`, `MixColumns` also jumbles the input around but it splits the 4x4 matrix by columns instead of rows. But since this is an iterative process, one round would involving substitution of bytes followed by mixing row-wise in conjunction with column-wise and finally the round key XOR. This would go on for 10 rounds, using 10 different round keys.

<div className="math-display">
{'\\begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} & a_{0,3} \\\\ a_{1,0} & a_{1,1} & a_{1,2} & a_{1,3} \\\\ a_{2,0} & a_{2,1} & a_{2,2} & a_{2,3} \\\\ a_{3,0} & a_{3,1} & a_{3,2} & a_{3,3} \\end{bmatrix} \\cdot\\begin{bmatrix} 2 & 3 & 1 & 1 \\\\ 1 & 2 & 3 & 1 \\\\ 1 & 1 & 2 & 3 \\\\ 3 & 1 & 1 & 2 \\end{bmatrix} '}
</div>

One detail here in the `MixColumns` process is that this multiplication operates independently over each column, so the first column is multiplied by the matrix as per Galois Field <span className="math-inline">2^8</span> to produce resulting first column, and so on and so forth. The resulting 4 columns are concatenated to form the output of a 4x4 matrix.

<div className="math-display">
{'\\begin{bmatrix} a_{0,0} \\\\ a_{1,0} \\\\ a_{2,0} \\\\ a_{3,0} \\end{bmatrix}\\cdot\\begin{bmatrix} 2 & 3 & 1 & 1 \\\\ 1 & 2 & 3 & 1 \\\\ 1 & 1 & 2 & 3 \\\\ 3 & 1 & 1 & 2 \\end{bmatrix}'} 
</div> 

When permutations is used, its effect is that the adversary must intercept a sufficiently large amount of message to assemble a statistical structure ("pattern"), since its observability is very limited in blocks of very small probability.

Confusion on the other hand mixes the secret key into the state (`AddRoundKey` and `SubBytes` operations), and its use of the key schedule also underlines the confusion concept. As we think about it, this is a public, well-documented algorithm meaning an adversary can go from cipher text to plain text by reversing the process if not for the presence of the secret key we incorporate to perform the XOR operation. The confusion and permutations that is incorporated nonetheless make it such that any small change (uppercase S to lowercase S) would result in large changes.

Since AES has become a standard, most CPU hardware and chip vendors have built-in instructions to perform AES and these are implementations that are incredibly efficienct and fast. In the [Practice Exercises](#practicalexercises) section, you will be asked to perform one of these on your machine.

## Knowledge Check 
### Practical Exercises
- [ ] Use the XOR [Experiment](#experiment1) set up above, paste the following value `` into the plain text field and observe the relationship between the input, the ASCII and the Binary. Compare this to [Wikipedia's ASCII control code chart](https://en.wikipedia.org/wiki/ASCII#Control_code_chart) to strengthen your understanding of this subject
- [ ] You can perform an AES encryption using tools that are probably shipped with your machine already. If you are on a Linux machine, chances are that OpenSSL is already installed for you. Proceed to run the following command (replace `LICENSE` with a sample text file)   
```bash
openssl enc -aes-256-cbc -in LICENSE -out tmpmessage.bin
# to convert binary to readable text
openssl enc -base64 -in tmpmessage.bin -out tmpmessage.b64
# print the message
cat tmpmessage.b64
# results: U2FsdGVkX1/Xb7z+bv9Z9ePRO8Jz74JQQEjwCGr0zoSjX1AP6z1H+yqgOFWBKSJwfEvqk1wu1e5Cur3BQAkRCvF1lA2nazXWxsO66d/yn06F4liaziT682zOW7FdfN23hQja1OQMX+DQ7g4S3jamH/VIxR4AkABxlxHR3VMnUxtU2niWMKgne/t+8JHz8cvNSEI1dDk4yvudmypcBImpSrqrJwFq0Q3HjLq9AnYoi0vxlykdSvPE55kqxXrLKUKUWxEu08qJEJE/7izgIyRLwwhigYrpYejRIzWlcluTS9N0EOulQh9Xsuomsxabd4AqgAw8kJwdM7bhaUrtmQk4uJ9ToknxXnXbR1/1
```

#### Knowledge Check
1. What would be the right decimal value for the hex of `0x22B`?
