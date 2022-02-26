import hashLogoFirst from 'Images/hash-logo-first.png';
import hashLogoRest from 'Images/hash-logo-rest.png';

import aimsolLogoFirst from 'Images/aimsol-logo-first.png';
import aimsolLogoRest from 'Images/aimsol-logo-rest.png';

import pksolLogoFirst from 'Images/pksol-logo-first.png';
import pksolLogoRest from 'Images/pksol-logo-rest.png';

import nykaaBackgroundImage from 'Images/background/background-image-nykaa.jpg';
import tailoredTechBackgroundImage from 'Images/background/background-image-tailoredtech.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';

export const timelineListValue = [
  {
    id: 'nykaa',
    companyName: 'Hashone Creatives',
    link: 'https://hashonecreatives.com/',
    position: 'Frontend Developer',
    duration: 'Nov 2020 - Present',
    location: 'Karachi',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Nykaa is an e-commerce website offering beauty and wellness products from more than 500 leading brands. Nykaa follows an inventory-based model with warehouses in Mumbai, New Delhi, and Chennai as its offline presence is in 60 stores and expanding. It claims to have over 1000+ curated brands and 85,000 products.',
    firstLogo: hashLogoFirst,
    restLogo: hashLogoRest,
    restMargin: 36, // the secound image margin because logo length is different
    backgroundImage: nykaaBackgroundImage,
    projects: ['nykaa']
  },
  {
    id: 'tailoredtech',
    companyName: 'Aim Solutions',
    link: 'https://www.aim-sol.com/',
    position: 'Frontend Developer',
    duration: 'Jan 2020 - Oct 2020',
    location: 'Karachi',
    roleDetail: 'In TailoredTech I got to experience many roles. I was initially working as an Android developer for a year then jumped on to these tech stacks :- Laravel, React-Native and React.',
    companyDetail: 'Tailored Tech was a service based startup specialised in web and mobile development, and had clients like Nykaa, Ezone, Sportobuddy, healthcode, hippily, wok express, etc.<br /> TailoredTech later got acqui-hired by Nykaa.',
    firstLogo: aimsolLogoFirst,
    restLogo: aimsolLogoRest,
    restMargin: 34,
    backgroundImage: tailoredTechBackgroundImage,
    projects: ['snapteam', 'pulse', 'measure', 'wakency', 'benefactory', 'lighthouse']
  },
  {
    id: 'mit',
    companyName: 'Pksol',
    position: 'Frontend Developer',
    link: 'https://www.pksol.com/',
    duration: 'Aug 2018 - Oct 2019',
    location: 'Karachi',
    roleDetail: '',
    companyDetail: '',
    firstLogo: pksolLogoFirst,
    restLogo: pksolLogoRest,
    restMargin: 37,
    backgroundImage: collegeBackgroundImage,
    projects: ['vc_music_player']
  }
];

