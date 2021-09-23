import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shubham Bajaj', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Shubham Bajaj',
  subtitle: 'I\'m a Full-Stack Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Hello! My name is Shubham Bajaj and I\'m a Jaipur-based developer. I work remotely on projects for clients.',
  paragraphTwo: 'I have a diverse set of skills which includes HTML,CSS, Javascript, Angular, React, NodeJs, ExpressJs, Ionic, Git, Bootstrap, etc.',
  paragraphThree: 'I primarily work on Angular and React, but picking up a new framework or language isn\'t a problem. ',
  resume: 'https://drive.google.com/file/d/1_SJNL6O5Y4-Xgt-FV1n0lUr3tkBHkKnr/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Screenshot (3).png',
    title: 'Traveltodandeli.com',
    info: 'Website for a resort based in Dandeli, Karnataka. ',
    info2: 'MEAN Stack was used to make website. Users can look for accommodation, places, activities to enjoy and contact resort for bookings. ',
    url: 'https://www.traveltodandeli.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'Amazon-Clone',
    info: 'Amazon-Clone with order,checkout and payment facility.',
    info2: 'React, Firebase, Stripe were used to make the website.',
    url: 'https://clone-b78a1.web.app/',
    repo: 'https://github.com/bajajshubh/Amazon-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (9).png',
    title: 'E-commerce Website',
    info: 'Full-Stack Website using Angular, NodeJs, and MySQL',
    info2: 'Users can search, order, look, add to cart product according to categories.',
    url: '',
    repo: 'https://github.com/bajajshubh/E-commerce-Website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'shubhbajaj10@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: `mailto: shubhbajaj10@gmail.com`,
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shubham-b-9a71b6107/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bajajshubh/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
