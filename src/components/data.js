import { v4 as uuidv4 } from 'uuid';
import social from '../images/social.png';
import blogapp from '../images/blogapp.png';
import portfolio from '../images/portfolio.png';
import restaurant from '../images/restaurant.png';
import simpledraw from '../images/simple-draw.png';
import foodbud from '../images/foodbud.png';
import todo from '../images/todo.png';
import comingSoon from '../images/comingSoon.jpg';

const sites = [
  {
    id: uuidv4(),
    siteName: 'Social App',
    url: 'https://amarpustam-socialapp-demo.netlify.app/',
    description:
      'This is a social website clone. It was built to have the basic functionality such as creating, reading, updating and deleting posts. The functionality is taken a step further from other projects by allowing users to interract through adding friends, commenting and liking posts.',
    techDesc:
      'This fullstack application is built using Reactjs, Nodejs and Expressjs on the backend and uses SQL to store data hosted on AWS. For testing purposes you can use test3 as the username and password to enter the site.',
    image: social,
    giturl: 'https://github.com/amarpustam45/social-app-client',
  },
  {
    id: uuidv4(),
    siteName: 'Blog App',
    url: 'https://amarpustam-blog-app-demo.netlify.app/',
    description:
      "This web site is a blog app. It's intended purpose is to demonstrate the use of user registration/login, as well as creating, updating and deleting posts.",
    techDesc:
      'This is a full-stack application built using Reactjs on the front end, Nodejs and Expressjs on the backend and data is stored in a MySQL database which is hosted on AWS.',
    image: blogapp,
    giturl: 'https://github.com/amarpustam45/blog-app-client',
  },
  {
    id: uuidv4(),
    siteName: 'My portfolio',
    url: 'https://amar-pustam.netlify.app',
    description:
      'This is my portfolio and it is the first look at my skills as a front-end web developer.',
    techDesc:
      'This site was built using react, making use of hooks such as useState and useEffect.',
    image: portfolio,
    giturl: 'https://github.com/amarpustam45/portfolio',
  },
  {
    id: uuidv4(),
    siteName: 'Foodbud',
    url: 'https://foodbud.netlify.app',
    description:
      'This website allows you to search avaliable ingedients that you have and returns reciped that contains them.',
    techDesc:
      'This was built using React, styled with styled-components and is powered by "edmam" api',
    image: foodbud,
    giturl: 'https://github.com/amarpustam45/foodbud',
  },
  {
    id: uuidv4(),
    siteName: 'Appitite Andys',
    url: 'https://restaurant-demo-amarpustam.netlify.app',
    description: 'This is a simple demo of a restaurant menu application.',
    techDesc: 'This was built using vanilla html,css and javascript.',
    image: restaurant,
    giturl: 'https://github.com/amarpustam45/Restaurant-Demo',
  },
  {
    id: uuidv4(),
    siteName: 'Simple Draw',
    url: 'https://draw-app-demo.netlify.app',
    description:
      'This site allows the user to create drawings in the web browser and download the result.',
    techDesc:
      'This site was build using vanilla html, css and javascript. The canvas tag was used mainly to achieve the functionality of this site.',
    image: simpledraw,
    giturl: 'https://github.com/amarpustam45/SimpleDraw',
  },
  {
    id: uuidv4(),
    siteName: 'My Todo',
    url: 'https://my-todo-amar-pustam.netlify.app',
    description:
      "This is a to do app build in react. it's purpose of this app is to demonstrate the basic use of react hooks",
    techDesc: 'This application was built using react.',
    image: todo,
    giturl: 'https://github.com/amarpustam45/reminder-app',
  },
  {
    id: uuidv4(),
    siteName: 'More Coming Soon...',
    url: 'https://amar-pustam.netlify.app',
    description: 'More webites coming soon.',
    techDesc: ' ',
    image: comingSoon,
    giturl: 'https://github.com/amarpustam45',
  },
];

export default sites;
