# Learn Blockchain
This repository contains the code for the [LearnBlockchain.Academy](https://learnblockchain.academy), a project in active development by [Supertype](https://supertype.ai). 

## Motivation
We wanted to create an interactive workbook that help the average reader learn about the engineering marvel of blockchain, the Bitcoin protocol, and the cryptographic ideas that made it possible.

### 🔗 Coverage
- Symmetric and Asymmetric Key Cryptograpgy
- Encryption and Decryption with RSA
- Secure Hash Algorithms (SHA-256, Keccak)
- Merkle Tree and Merkle Proof
- Consensus Mechanism
- Proof of Work
- Bitcoin's Block Generation
- Coinbase Transaction
- Mining Reward
- Ethereum's Smart Contract
- Transactions

## 🚀 Development

Get started by running the following commands:

```
$ git clone git@github.com:onlyphantom/blockchain.git
$ cd blockchain
$ npm install
$ npm start
```

Using `yarn` (recommended):
```
$ git clone git@github.com:onlyphantom/blockchain.git
$ cd blockchain
$ yarn install
$ yarn start
```

Visit `http://localhost:8000/` to view the app.

### 🔄 Refreshing Data
Some of the data used in this material may be periodically refreshed. Data are stored in the /etc/ subdirectory.

#### Sources
- `difficulty.json`: https://www.blockchain.com/charts/difficulty
- `n-transactions-per-block.json`: https://www.blockchain.com/charts/n-transactions-per-block

### 🔧 Configure

Content is written using MDX and stored in the `content` folder.

Open `config.js` for templating variables. Broadly, configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration: 
    - `pathPrefix` - Gatsby Path Prefix
    - `siteUrl` - Gatsby Site URL
    - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration:
    - `title` - The title that appears on the top left
    - `githubUrl` - The Github URL for the docs website
    - `helpUrl` - Help URL for pointing to resources
    - `tweetText` - Tweet text
    - `links` - Links on the top right
    - `search` - Enable search and [configure Algolia](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

- `sidebar` config for navigation links configuration:
    - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/\<filename>"
    - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)
    - `links` - Links on the bottom left of the sidebar
    - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration
    - `title` - Title of the website
    - `description` - Description of the website
    - `ogImage` - Social Media share og:image tag
    - `docsLocation` - The Github URL for Edit on Github

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. The sub navigation is alphabetically ordered.

### Algolia Configuration

To setup Algolia, go to `config.js` and update the `search` object to look like the one below:

```...,
	"search": {
		"enabled": true,
		"indexName": "MY_INDEX_NAME",
		"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
		"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
		"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
	},
```

Values for Algolia App ID, Search Key, and Admin Key can be obtained from Algolia Dashboard with the right set of permissions. Replace `MY_INDEX_NAME` with the Algolia Index name of your choice. To build the Algolia index, you need to run `npm run build` which will do a gatsby build along with content indexing in Algolia.

### Progressive Web App, Offline
On a mobile browser (such as Chrome on Android, Safari on iOS), you can add this to the homepage of your device. LearnBlockchain.Academy can run even in offline / airplane mode.