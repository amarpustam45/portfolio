import { v4 as uuidv4 } from 'uuid';
import portfolio from '../images/portfolio.png';
import restaurant from '../images/restaurant.png';
import simpledraw from '../images/simple-draw.png';
import todo from '../images/todo.png';

const sites = [
  {
    id: uuidv4(),
    siteName: 'My portfolio',
    url: 'https://amar-pustam.netlify.app',
    description:
      'This is my portfolio and it is the first look at my skills as a front-end web developer.',
    techDesc:
      'This site was built using react, making use of hooks such as useState and useEffect.',
    image: portfolio,
  },
  {
    id: uuidv4(),
    siteName: 'Appitite Andys',
    url: 'https://restaurant-demo-amarpustam.netlify.app',
    description: 'This is a simple demo of a restaurant menu application.',
    techDesc: 'This was built using vanilla html,css and javascript.',
    image: restaurant,
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
  },
  {
    id: uuidv4(),
    siteName: 'My Todo',
    url: 'https://my-todo-amar-pustam.netlify.app',
    description:
      "This is a to do app build in react. it's purpose of this app is to demonstrate the basic use of react hooks",
    techDesc: 'This application was built using react.',
    image: todo,
  },
];

export default sites;
