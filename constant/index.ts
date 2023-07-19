import { chertNode, eliasPortfolio, kahot, protectX } from '@/assets';

const navLinksData = [
  {
    lebel: 'home',
    href: '/',
  },
  {
    lebel: 'works',
    href: '/projects',
  },
  {
    lebel: 'about-me',
    href: '/about-me',
  },
  {
    lebel: 'contacts',
    href: '/contact',
  },
];

// project

const projectsData = {
  complete: [
    {
      name: 'Because Bitcoin Landing Page',
      tools: ['HTML', 'CSS', 'Javascript', 'TypeScript'],
      features_iamge: chertNode,
      describetion:
        'Frontend with subscription authenticator for premium newsletter',
      liveLink: '/',
      github: '',
    },
    {
      name: 'Because Bitcoin Academy',
      tools: ['React', 'NextJS', 'Node.js', 'SanityCMS'],
      features_iamge: protectX,
      describetion:
        'Backend course portal with Stripe paywall, using Vimeo and SanityCMS for seamless content management',
      liveLink: '/',
      github: '',
    },
    {
      name: 'Kahoot Answers Viewer',
      tools: ['HTML', 'CSS', 'Express', 'Node.js'],
      features_iamge: kahot,
      describetion: 'Get answers to your kahoot quiz',
      liveLink: '/',
      github: '',
    },
    {
      name: 'Daizy AI',
      tools: ['HTML', 'CSS', 'Express', 'Node.js'],
      features_iamge: kahot,
      describetion: 'Get answers to your kahoot quiz',
      liveLink: '/',
      github: '',
    },
    {
      name: 'Portfolio',
      tools: ['Vue', 'TS', 'Less'],
      features_iamge: eliasPortfolio,
      describetion: 'You’re using it rn',
      liveLink: '/',
      github: '',
    },
  ],
  smallProject: [
    {
      name: 'Twitch Project',
      tools: ['Discord.js', 'TS', 'JS'],

      describetion: 'Recreation of the UI of Twitch streaming platform.',
      liveLink: '/',
    },
    {
      name: 'My blog',
      tools: ['Vue', 'CSS', 'JS'],

      describetion: 'Front-end of my future blog website written in vue',
      liveLink: '/',
    },
    {
      name: 'Chess pro',
      tools: ['Figma'],

      describetion:
        'Figma landing page about service for viewing chess tournaments',
      liveLink: '/',
    },
    {
      name: 'CSS expirementse',
      tools: ['Figma'],

      describetion: 'Collection of my different little projects in css',
      liveLink: '/',
    },
    {
      name: 'Web Dev nvim config',
      tools: ['Lua', 'NeoVim'],

      describetion: 'Recreation of the UI of Twitch streaming platform.',
      liveLink: '/',
    },
    {
      name: 'Crash protect website',
      tools: ['Figma'],

      describetion:
        'Figma template for website about anti-raid, anti-crash discord bot',
      liveLink: '/',
    },
  ],
};

export { navLinksData, projectsData };
