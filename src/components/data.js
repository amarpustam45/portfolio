import { v4 as uuidv4 } from 'uuid';

export const sites = [
  {
    id: uuidv4(),
    siteName: 'My portfolio',
    url: 'https://amar-pustam.netlify.app',
    description: 'This is my portfolio',
    techDesc: 'Built using react',
    image: './images/portfolio.PNG',
  },
  {
    id: uuidv4(),
    siteName: 'Appitite Andys',
    url: 'https://restaurant-demo-amarpustam.netlify.app',
    description: 'This is a simple demo of a restaurant menu application',
    techDesc: 'This was built using vanilla html,css and javascript',
    image: './images/restaurant.PNG',
  },
  {
    id: uuidv4(),
    siteName: 'Simple Draw',
    url: 'https://draw-app-demo.netlify.app',
    description:
      'This site allows the user to create drawings in the web browser and download the result.',
    techDesc:
      'This site was build using b=vanilla html, css and javascript. The canvas tag was used mainly to achieve the functionality of this site.',
    images: './images/simpleDraw.PNG',
  },
  {
    id: uuidv4(),
    siteName: 'My Todo',
    url: 'https://my-todo-amar-pustam.netlify.app',
    description:
      "This is a to do app build in react. it's purpose of this app is to demonstrate the basic use of react hooks",
    techDesc: 'This application was built using react.',
    image: './images/todo.PNG',
  },
];
