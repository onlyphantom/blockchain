const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://supertype.ai',
    gaTrackingId: 'UA-175521274-2',
    trailingSlash: false,
  },
  header: {
    logo: 'https://supertype.ai/wp-content/uploads/2021/07/logo_sq_inv-768x768.png',
    logoLink: 'https://supertype.ai',
    title:
      // "<a href='https://supertype.ai'><img class='img-responsive' src='' alt='Learn logo' /></a>",
      "<a href='https://supertype.ai'>Learn Blockchain | Academy<a>",
    githubUrl: 'https://github.com/onlyphantom/blockchain',
    helpUrl: '',
    tweetText: '',
    // when this is ready, like to the FB group
    social: `<li>
		    <a href="https://www.facebook.com/groups/web3dev" target="_blank" rel="noopener">
		      <div class="fbBtn">
		        <img src='https://raw.githubusercontent.com/onlyphantom/blockchain/main/src/components/images/fb.svg' alt='Facebook group'/>
		      </div>
		    </a>
		  </li>`,
    // 	<li>
    //     <a href="https://discordapp.com/invite/supertypeai" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://raw.githubusercontent.com/onlyphantom/blockchain/main/src/components/images/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [{ text: 'LinkedIn', link: 'https://linkedin.com/company/supertype-ai' }],
    search: {
      enabled: true,
      indexName: 'learnblockchain',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/features',
      '/cryptography',
      '/cryptography-in-blockchain',
      '/bitcoin',
      '/transactions'
    ],
    collapsedNav: [
      '/features', // add trailing slash if enabled above
    ],
    links: [{ text: 'Supertype', link: 'https://supertype.ai' }],
    frontline: false,
    ignoreIndex: true,
    title:
      // "<a href='https://supertype.ai/'>graphql </a><div class='greenCircle'></div><a href=''>react</a>",
      // "Learn Blockchain Academy <small style='margin-left:2%; font-weight: 500;'> by Supertype</small>",
      '<img src="https://supertype.ai/wp-content/uploads/2021/07/logo_sq_inv-768x768.png" style="width: 50px; margin-right:10px;"> Learning Modules',
  },
  siteMetadata: {
    title: 'Learn Blockchain | Supertype',
    description: 'A Blockchain Academy developed by Supertype, a full cycle data science consultancy.',
    ogImage: null,
    keywords: 'blockchain, classroom',
    docsLocation: 'https://github.com/onlyphantom/blockchain/tree/main/content',
    favicon: 'https://supertype.ai/wp-content/uploads/2021/07/cropped-logo_sq_inv-32x32.png',
  },
  pwa: {
    enabled: true, // disabling this will remove the existing service worker.
    manifest: {
      name: 'Learn Blockchain',
      short_name: 'LearnBlockchain',
      start_url: '/?source=pwa',
      background_color: '#0e1b28',
      theme_color: '#0e1b28',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      description: 'Learn Blockchain from first principles',
      icons: [
        {
          src: 'src/img/192.png',
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: 'src/img/256.png',
          sizes: `256x256`,
          type: `image/png`,
        },
        {
          src: 'src/img/512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
                {
          src: 'src/img/1024.png',
          sizes: `1024x1024`,
          type: `image/png`,
        },
      ],
      // "screenshots": [
      //   {
      //       "src": "src/img/screenshot1.png",
      //       "type": "image/png",
      //       "sizes": "540x720"
      //   },
      //   {
      //       "src": "src/img/screenshot2.jpg",
      //       "type": "image/jpg", 
      //       "sizes": "540x720"
      //   },
      //   {
      //     "src": "screenshot1.webp",
      //     "sizes": "1280x720",
      //     "type": "image/webp",
      //     "label": "Homescreen of Blockchain App"
      //   },
      // ],
      "shortcuts" : [
        {
          "name": "Cryptography 101",
          "url": "/cryptography",
          "description": "Basics of classical and modern cryptography"
        },
        {
          "name": "Cryptography in Blockchain",
          "url": "/cryptography-in-blockchain",
          "description": "Role of encryption and hashing in blockchain"
        },
        {
          "name": "How Bitcoin Works",
          "url": "/bitcoin",
          "description": "In-depth look at the Bitcoin protocol"
        },
        {
          "name": "Transactions",
          "url": "/transactions",
          "description": "Understanding Ethereum transactions"
        },
      ]
    },
  },
};

module.exports = config;
