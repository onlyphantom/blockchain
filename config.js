const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://supertype.ai',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://supertype.ai/wp-content/uploads/2021/07/logo_sq_inv-300x300.png',
    logoLink: 'https://supertype.ai',
    title:
      // "<a href='https://supertype.ai'><img class='img-responsive' src='' alt='Learn logo' /></a>",
      "<a href='https://supertype.ai'>Learn Blockchain | Academy<a>",
    githubUrl: 'https://github.com/onlyphantom/blockchain',
    helpUrl: '',
    tweetText: '',
    // when this is ready, like to the FB group
    social: `<li>
		    <a href="https://www.facebook.com/groups/blockchainindonesia" target="_blank" rel="noopener">
		      <div class="fbBtn">
		        <img src='src/components/images/fb.svg' alt={'Facebook group'}/>
		      </div>
		    </a>
		  </li>`,
		// 	<li>
		//     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		//       <div class="discordBtn">
		//         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
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
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Supertype', link: 'https://supertype.ai' }],
    frontline: false,
    ignoreIndex: true,
    title:
      // "<a href='https://supertype.ai/'>graphql </a><div class='greenCircle'></div><a href=''>react</a>",
      // "Learn Blockchain Academy <small style='margin-left:2%; font-weight: 500;'> by Supertype</small>",
      'Learn Blockchain Academy <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300,h_300/https://supertype.ai/wp-content/uploads/2021/07/logo_sq_inv-300x300.png" style="width: 30px;">',
  },
  siteMetadata: {
    title: 'Learn Blockchain | Supertype',
    description: 'A Blockchain Academy developed by Supertype, a full cycle data science consultancy.',
    ogImage: null,
    keywords: 'blockchain, classroom',
    docsLocation: 'https://github.com/onlyphantom/blockchain/tree/main/content',
    favicon: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_32,h_32/https://supertype.ai/wp-content/uploads/2021/07/cropped-logo_sq_inv-32x32.png',
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
