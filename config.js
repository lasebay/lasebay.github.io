module.exports = {
  siteTitle: 'Lase Bayudan', // <title>
  manifestName: 'SolidState',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-solidstate/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Lase Bayudan',
  subHeading: 'UX Designer exploring people, technology, and nature',

  // projects
  projects: [
    {
      name: 'ssf-homepage',
      url: '/projects/ssf-homepage',
      hashtags:
        '#product-design #interaction-design  #inclusive-design  #responsive-web #ios',
      tools: 'Sketch, Abstract, Invision, Zeplin',
      summary:
        'As part of the SuccessFactors Homepage team, I simplified the experience for manager users to work through several approvals and other team engagements straight from the Homepage. This project is a work in progress for release later in 2021.',
    },
    {
      name: 'cux-guidelines',
      url: '/projects/cux-guidelines',
      hashtags: '#user research #ux-writing #conversational-design #ios',
      tools: 'Mural, Sketch, Abstract',
      summary:
        'As part of the central design team responsible for maintaining SAP’s design system Fiori, I updated the conversational UX guidelines to produce content that’s actionable and easy to navigate.',
    },
  ],

  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/lasebay/',
    },
    // {
    //   icon: 'fa-twitter',
    //   name: 'Twitter',
    //   url: 'https://twitter.com/onlyanubhav',
    // },
    // {
    //   icon: 'fa-facebook',
    //   name: 'Facebook',
    //   url: 'https://facebook.com/theanubhav',
    // },
    {
      icon: 'fa-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lase-bayudan/',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:lasbay@gmail.com',
    },
  ],
  phone: '+1 (678) 665-9903 (call/text)',
  address: 'Atlanta, GA',
};
