import React from 'react';

import discoverImg from '@/../public/images/discover.png';
import isluxuryImg from '@/../public/images/isluxury.png';
import gamesforestImg from '@/../public/images/gamesforest.png';
import myhomeImg from '@/../public/images/myhome.png';
import lapeImg from '@/../public/images/lape.png';
import titanImg from '@/../public/images/titan.png';
import mypreImg from '@/../public/images/mypre.png';
import speakImg from '@/../public/images/speak.png';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Egineer',
    company: 'Outdoorsy',
    description:
      'I worked on web apps using React, Next.js, and TypeScript. I built backend services with Node.js, Express, and PostgreSQL. I connected third-party tools and used GraphQL to make data loading better. I teamed up with others to improve how the app looks and works on both web and mobile. I used Docker, AWS, and Firebase to deploy the apps. I also wrote tests with Jest, Cypress, and Supertest to make sure everything worked well.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '09/2023 - Present',
  },
  {
    title: 'Software Engineer',
    company: 'RE:STUDIO',
    description:
      'I built and supported web apps using JavaScript, TypeScript, React, and Vue. I worked on the backend with Node.js, Express, Ruby on Rails, Django, and FastAPI. I created APIs with REST and GraphQL to make data flow better. I used PostgreSQL, MySQL, and MongoDB for storing data. I added real-time features with WebSockets and handled background jobs with Sidekiq and Celery. For deployment, I used AWS, Docker, and Heroku. I also wrote tests with Jest, Cypress, and RSpec to keep things stable and reliable.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '07/2022 - 08/2023',
  },
  {
    title: 'Software Engineer',
    company: 'Aiberry',
    description:
      'I built web apps using JavaScript, React, and TypeScript. On the backend, I used Python and Ruby on Rails to build APIs. I worked with both REST and GraphQL to make data flow better. I added real-time features with WebSockets and ran background jobs with Sidekiq and Celery. I used PostgreSQL and Redis to manage data. I worked closely with other teams to build and ship good software on time. I also handled deployments with AWS, Docker, and Git, and wrote tests using Jest, RSpec, and Pytest to make sure everything worked well.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '06/2020 - 06/2022',
  },
  {
    title: 'Full Stack Engineer',
    company: 'BairesDev',
    description: `I built and maintained web apps using JavaScript, TypeScript, and React, created scalable APIs with Node and Express, worked with multiple databases, added real-time features, handled deployments with AWS and Docker, and wrote tests to keep everything reliable.`,
    icon: React.createElement(BookIcon),
    date: '09/2018 - 06/2020',
  },
  {
    title: 'Full Stack Developer',
    company: 'SurveyJunkie',
    description:
      'I built and maintained full-stack web apps using JavaScript, PHP, and modern frameworks, designed APIs with REST and GraphQL, managed both SQL and NoSQL databases, handled frontend design with responsive layouts, optimized backend performance with Node.js, automated deployments with Docker and AWS, wrote tests to ensure stability, and collaborated closely with teams in an agile setup.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '02/2015 - 09/2018',
  },
  {
    title: 'Web Developer',
    company: 'Labster',
    description: `I built and maintained responsive web apps using HTML, CSS, JavaScript, and Angular, developed scalable backend features with PHP and Symfony, collaborated closely with other teams, and tested APIs with Postman to ensure everything worked smoothly.`,
    icon: React.createElement(BookIcon),
    date: '10/2013 - 01/2015',
  }
] as const;

export const images = {
  discoverImg,
  isluxuryImg,
  gamesforestImg,
  myhomeImg,
  lapeImg,
  titanImg,
  mypreImg,
  speakImg,
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    imageUrl: discoverImg,
    link: 'https://discoverylandco.com/'
  },
  {
    imageUrl: isluxuryImg,
    link: 'https://www.isluxury.com/'
  },
  {
    imageUrl: gamesforestImg,
    link: 'https://gamesforest.club/'
  },
  {
    imageUrl: myhomeImg,
    link: 'https://www.myhomecommunities.com/'
  },
  {
    imageUrl: lapeImg,
    link: 'https://lapetiteourse.ca/en'
  },
  {
    imageUrl: titanImg,
    link: 'https://www.titanencircle.com/'
  },
  {
    imageUrl: mypreImg,
    link: 'https://www.myprephero.com/'
  },
  {
    imageUrl: speakImg,
    link: 'https://www.verbling.com/'
  },
  
  {
    title: 'Surge',
    description:
      'Service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
