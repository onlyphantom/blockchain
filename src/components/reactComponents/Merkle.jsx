import React, { useEffect } from 'react';

const Merkle = () => {
  let tree = null;

  useEffect(() => {
    // const val = require('crypto').createHash('sha256').update(string).digest('hex');
    const { MerkleTree } = require('merkletreejs');
    const SHA256 = require('crypto-js/sha256');

    const leaves = ['a', 'b', 'c'].map((x) => SHA256(x));
    tree = new MerkleTree(leaves, SHA256);
    console.log(tree);
    console.log(tree.toString());

    const root = tree.getRoot().toString('hex');
    const leaf = SHA256('a');
    const proof = tree.getProof(leaf);
    console.log(tree.verify(proof, leaf, root)); // true
    console.log(typeof console.log(tree));
  }, []);

  return (
    <div>
      <h1>Merkle Tree</h1>
      <div>
        <h2>Root</h2>
        {tree && <p>{JSON.stringify(tree.toString())}</p>}
      </div>
    </div>
  );
};

export default Merkle;
