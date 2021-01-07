import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faSass,
  faBootstrap,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCubes,
  faExpandArrowsAlt,
  faTh,
  faBoxOpen,
  faTerminal,
  faSearch,
  faMobileAlt,
  faCat,
} from '@fortawesome/free-solid-svg-icons';
import {
  faComments,
  faImages,
  faFileCode,
} from '@fortawesome/free-regular-svg-icons';

const LEARN_STRING = 'MERN Stack';
const HEADER_STACK = ['CSS', 'JS', 'NODE', 'REACT', 'MONGO', 'EXPRESS', 'GIT'];

const STACK = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript ES6', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js / Express.js', icon: faNodeJs },
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Git / GitHub', icon: faGitAlt },
  { name: 'Rest API', icon: faComments },
  { name: 'Object-oriented Programming', icon: faCubes },
  { name: 'Asynchronous Programming', icon: faExpandArrowsAlt },
  { name: 'BEM', icon: faTh },
  { name: 'SASS / SCSS ', icon: faSass },
  { name: 'WebPack', icon: faBoxOpen },
  { name: 'Command Line (Bash)', icon: faTerminal },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'Adobe Photoshop', icon: faImages },
  { name: 'Figma', icon: faFigma },
  { name: 'Pixel Perfect', icon: faSearch },
  { name: 'Responsive Layouts', icon: faMobileAlt },
  { name: 'Semantic HTML', icon: faFileCode },
  { name: 'Cat Handling', icon: faCat },
];

export { LEARN_STRING, HEADER_STACK, STACK };
