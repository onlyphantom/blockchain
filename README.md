# Learn Blockchain
This repository contains the code for the [LearnBlockchain.Academy](https://learnblockchain.academy), a project in active development by [Supertype](https://supertype.ai). 

🔗 Live Site: [Learn Blockchain | Academy](https://learnblockchain.academy)
## 💖 Motivation
We wanted to create an interactive workbook that help the average reader learn about the engineering marvel of blockchain, the Bitcoin protocol, and the cryptographic ideas that made the Bitcoin protocol possible. It is created to facilitate a self-learning approach guided by interactive quizzes, live code editors, and other interactive elements to help the reader acquire theoretical knowledge through experimentation.

Among the features include:
- Content authored in [MDX](https://github.com/mdx-js/mdx)
- GraphQL-powered and GraphiQL integration
    - Start the app and navigate to http://localhost:8000/___graphql
- Dark / Light theme switcher
- Syntax Highlighting with [Prism](https://github.com/PrismLibrary/Prism)
- Directly editable through GitHub integration
    - If you spot a typo or error, hit "Edit" and submit the edit directly on GitHub
- Progressive Web App (Works Online, Offline, even in Airplane mode)
- Sidebars on both sides, prev / next navigation
- Search integration with Algolia
- Google Analytics integration
- Live code editor with [react-live](https://github.com/FormidableLabs/react-live)
- Beautiful, interactive React UX components with [Ant Design](https://github.com/ant-design/ant-design)
- Beautiful, interactive Charts with [Chart.js](https://github.com/chartjs/Chart.js)
- LaTeX support through [react-katex](https://github.com/MatejBransky/react-katex)
- Full integration with [crypto-js](https://github.com/brix/crypto-js), a library of crypto standards

The workbook inherits from the [hasura/gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter) template but are updated so support the latest version of React (17.0.2) and Gatsby (4.3.0). 

### 🎁 Blockchain Topics
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
Some of the data used in this material may be periodically refreshed. Data are stored in the `/etc/` subdirectory.

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

### 🔎 Algolia Search

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

LearnBlockchain.Academy is deployed on Netlify, so these environment variables are stored there. You may have to use `dotenv` (`npm install dotenv`) or different configuration, such as Docker, to get this working. 

### ✈️ Progressive Web App
On a mobile browser (such as Chrome on Android, Safari on iOS), you can add this to the homepage of your device. LearnBlockchain.Academy can run even in offline / airplane mode.

### 🙏 Support
I work on this in my spare time out of my home in Indonesia, but I do make an effort to be as available as possible. If you have ideas to improve this project, or make blockchain education more accessible in less-privileged parts of the world, please reach out to me. Please also feel free to suggest ideas or report bugs by opening an issue. PR and collaborators welcomed!

If you wish to make a donation or explore sponsorships / brand partnerships on the main site, please reach out to me on [LinkedIn](https://id.linkedin.com/in/chansamuel), [Facebook](https://www.facebook.com/onlyphantom) or through the contact form at [Supertype](https://supertype.ai). I usually respond within 1-2 hours.
