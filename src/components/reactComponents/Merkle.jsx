import React, { useEffect, useState } from 'react';

const Merkle = () => {
  const [mtree, setMTree] = useState(null);

  useEffect(() => {
    const { MerkleTree } = require('merkletreejs');
    const SHA256 = require('crypto-js/sha256');

    const leaves = ['alice', 'bob', 'charlie'].map((x) => SHA256(x));
    const tree = new MerkleTree(leaves, SHA256);
    const root = tree.getRoot().toString('hex');
    const leaf = SHA256('bob');
    const proof = tree.getProof(leaf);
    console.log('proof', proof);
    console.log('bob in tree:', tree.verify(proof, leaf, root));

    const impostor = SHA256('carol');
    const badproof = tree.getProof(impostor);
    console.log('carol in tree:', tree.verify(badproof, impostor, root));

    setMTree(tree);
  }, []);

  return (
    <div>
      <h1>Merkle Tree</h1>
      <div>
        <h2>Root</h2>
        {mtree && <p>Printing Tree</p>}
        <pre>{mtree?.toString()}</pre>
      </div>
    </div>
  );
};

export default Merkle;
