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
      enabled: false,
      indexName: '',
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
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Learn Blockchain',
      short_name: 'LearnBlockchain',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
