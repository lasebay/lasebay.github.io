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
  subHeading: 'UX Designer exploring people, technology, and sustainability',

  // timeline
  timeline: [
    {
      time: 'Jun 2015 - May 2019',
      summary:
        "I received a Bachelor's degree in Computer Science from the Georgia Institute of Technology, with a focus on user-centered design and human-computer interaction.",
    },
    {
      time: 'Aug 2017 - May 2019',
      summary:
        'As an undergraduate researcher, I led a team at Georgia Tech in collaboration with Grady Memorial Hospital Emergency Department, and the Centers for Disease Control and Prevention (CDC) to research, design, and develop solutions to optimize patient care flow.',
    },
    {
      time: 'Jun 2018 - Aug 2018',
      summary:
        'I was a software development intern at First Data (now Fiserv). I developed and demoed Alexa voice experiences to company managers and chief executives.',
    },
  ],

  // detailed projects
  projects: [
    {
      name: 'SuccessFactors Homepage',
      url: '/projects/ssf-homepage',
      hashtags:
        '#product-design #interaction-design  #inclusive-design  #responsive-web #ios',
      tools: 'Sketch, Abstract, Invision, Zeplin',
      subheading: 'Reimagining SuccessFactors Homepage',
      summary:
        'As part of the SuccessFactors Homepage team, I simplified the experience for manager users to work through several approvals and other team engagements straight from the Homepage. This project is a work in progress for release later in 2021.',
    },
    {
      name: 'CUX Guidelines',
      url: '/projects/cux-guidelines',
      hashtags: '#user research #ux-writing #conversational-design #ios',
      tools: 'Mural, Sketch, Abstract',
      subheading: "Streamlining SAP's Conversational UX Guidelines",
      summary:
        'As part of the central design team responsible for maintaining SAP’s design system Fiori, I updated the conversational UX guidelines to produce content that’s actionable and easy to navigate.',
    },
  ],

  // social
  socialLinks: [
    {
      icon: 'fa-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lase-bayudan/',
      handle: 'lase-bayudan',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:lasbay@gmail.com',
      handle: 'lasbay@gmail.com',
    },
    // {
    //   icon: 'fa-phone',
    //   name: 'Mobile',
    //   url: 'tel:+6786659903',
    // },
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/lasebay/',
      handle: 'lasebay',
    },
    // {
    //   icon: 'fa-home',
    //   name: 'Address',
    //   url: 'Atlanta, GA',
    // },
  ],
  // phone: 'tel:+6786659903',
  // address: 'Atlanta, GA',
};
