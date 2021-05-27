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
  faTwitter,
  faGithub,
  faLinkedin,
  faDev,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faStepForward,
  faTh,
  faBoxOpen,
  faTerminal,
  faSearch,
  faMobileAlt,
  faCat,
  faVial,
} from '@fortawesome/free-solid-svg-icons';
import {
  faComments,
  faImages,
  faFileCode,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import imageCalcHi from '../images/project_calculator_hi.png';
import imageCalc from '../images/project_calculator.png';
import imageClockHi from '../images/project_clock_hi.png';
import imageClock from '../images/project_clock.png';
import imageMestoHi from '../images/project_mesto_hi.png';
import imageMesto from '../images/project_mesto.png';
import imageNewsHi from '../images/project_news-explorer_hi.png';
import imageNews from '../images/project_news-explorer.png';
import imageKanbanHi from '../images/project_kanban_hi.png';
import imageKanban from '../images/project_kanban.png';
import imageBookshelfHi from '../images/project_bookshelf_hi.png';
import imageBookshelf from '../images/project_bookshelf.png';
import imageAsteroidsHi from '../images/project_asteroids_hi.png';
import imageAsteroids from '../images/project_asteroids.png';
import imageOrderHi from '../images/project_orderform_hi.png';
import imageOrder from '../images/project_orderform.png';
import imageMemoryHi from '../images/project_memory_hi.png';
import imageMemory from '../images/project_memory.png';

const LEARN_STRING = 'TypeScript/Redux';
const HEADER_STACK = ['CSS', 'TS', 'NEXT', 'REACT', 'NODE', 'GIT', 'REDUX'];

const STACK = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript / TypeScript', icon: faJs },
  { name: 'React / Redux / Saga', icon: faReact },
  { name: 'Next.js', icon: faStepForward },
  { name: 'Node.js / Express.js', icon: faNodeJs },
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Git / GitHub', icon: faGitAlt },
  { name: 'RESTful API', icon: faComments },
  { name: 'BEM', icon: faTh },
  { name: 'SASS / SCSS ', icon: faSass },
  { name: 'Jest', icon: faVial },
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

const SOCIAL = [
  { name: 'catlogic@ya.ru', icon: faEnvelope, link: 'mailto:catlogic@ya.ru' },
  { name: 'Twitter', icon: faTwitter, link: 'https://twitter.com/cat__logic' },
  { name: 'GitHub', icon: faGithub, link: 'https://github.com/cat-street' },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/catlogic/',
  },
  { name: 'Dev.to', icon: faDev, link: 'https://dev.to/catlogic' },
  { name: 'Telegram', icon: faTelegramPlane, link: 'https://t.me/catlogic' },
];

const PROJECTS = [
  {
    name: 'React Order Form',
    stack: '(TypeScript, React, Formik, SCSS)',
    link: 'https://cat-street.github.io/flatstack-orderform/',
    repo: 'https://github.com/cat-street/flatstack-orderform',
    img: imageOrder,
    imgHi: imageOrderHi,
  },
  {
    name: 'React Bookshelf',
    stack: '(TypeScript, React, Redux, Bootstrap)',
    link: 'https://zen-austin-25d292.netlify.app/',
    repo: 'https://github.com/cat-street/react-bookshelf',
    img: imageBookshelf,
    imgHi: imageBookshelfHi,
  },
  {
    name: 'Armageddon V',
    stack: '(TypeScript, React, Next.js)',
    link: 'https://asteroids-nasa.vercel.app/',
    repo: 'https://github.com/cat-street/asteroids-nasa',
    img: imageAsteroids,
    imgHi: imageAsteroidsHi,
  },
  {
    name: 'Memory Game',
    stack: '(React, TypeScript)',
    link: 'https://cat-street.github.io/creative-memory-game/',
    repo: 'https://github.com/cat-street/creative-memory-game',
    img: imageMemory,
    imgHi: imageMemoryHi,
  },
  {
    name: 'News Explorer',
    stack: '(JavaScript, React, Node/Express, MongoDB)',
    link: 'https://news.catlogic.ru/',
    repo: 'https://github.com/cat-street/news-explorer',
    img: imageNews,
    imgHi: imageNewsHi,
  },
  {
    name: 'Sample Kanban board',
    stack: '(TypeScript, React, Bootstrap)',
    link: 'https://cat-street.github.io/anyway-kanban/',
    repo: 'https://github.com/cat-street/anyway-kanban',
    img: imageKanban,
    imgHi: imageKanbanHi,
  },
  {
    name: 'Yandex Mesto',
    stack: '(React, Node/Express, MongoDB)',
    link: 'https://mesto.catlogic.ru/',
    repo: 'https://github.com/cat-street/react-mesto-api-full',
    img: imageMesto,
    imgHi: imageMestoHi,
  },
  {
    name: 'CatLogic Calculator',
    stack: '(React, pure CSS design)',
    link: 'http://cat-street.github.io/cl-002-calculator/',
    repo: 'https://github.com/cat-street/cl-002-calculator',
    img: imageCalc,
    imgHi: imageCalcHi,
  },
  {
    name: 'CatLogic Clock',
    stack: '(JavaScript, pure CSS design)',
    link: 'https://cat-street.github.io/catlogic-clock/',
    repo: 'https://github.com/cat-street/catlogic-clock',
    img: imageClock,
    imgHi: imageClockHi,
  },
];

export {
  LEARN_STRING, HEADER_STACK, STACK, PROJECTS, SOCIAL,
};
