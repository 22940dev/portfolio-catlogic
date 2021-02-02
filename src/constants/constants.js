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
  faCubes,
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
import imagePomodoroHi from '../images/project_pomodoro_hi.png';
import imagePomodoro from '../images/project_pomodoro.png';
import imageQuotesHi from '../images/project_quotes_hi.png';
import imageQuotes from '../images/project_quotes.png';

const LEARN_STRING = 'MERN Stack';
const HEADER_STACK = ['CSS', 'JS', 'NODE', 'REACT', 'MONGO', 'EXPRESS', 'GIT'];

const STACK = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript ES6', icon: faJs },
  { name: 'React / Redux', icon: faReact },
  { name: 'Node.js / Express.js', icon: faNodeJs },
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Git / GitHub', icon: faGitAlt },
  { name: 'RESTful API', icon: faComments },
  { name: 'Object-oriented Programming', icon: faCubes },
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
    link: 'https://www.linkedin.com/in/cat-logic/',
  },
  { name: 'Dev.to', icon: faDev, link: 'https://dev.to/cat__logic' },
  { name: 'Telegram', icon: faTelegramPlane, link: 'https://t.me/cat_logic' },
];

const PROJECTS = [
  {
    name: 'News Explorer',
    stack: '(JavaScript, React, Node/Express, MongoDB)',
    link: 'https://news.catlogic.ru/',
    repo: 'https://github.com/cat-street/news-explorer',
    img: imageNews,
    imgHi: imageNewsHi,
  },
  {
    name: 'Yandex Mesto',
    stack: '(JavaScript, React, Node/Express, MongoDB)',
    link: 'https://mesto.catlogic.ru/',
    repo: 'https://github.com/cat-street/react-mesto-api-full',
    img: imageMesto,
    imgHi: imageMestoHi,
  },
  {
    name: 'CatLogic Calculator',
    stack: '(JavaScript, React, HTML, CSS)',
    link: 'http://cat-street.github.io/cl-002-calculator/',
    repo: 'https://github.com/cat-street/cl-002-calculator',
    img: imageCalc,
    imgHi: imageCalcHi,
  },
  {
    name: 'Random Quote Machine',
    stack: '(HTML, SCSS, JavaScript, React, Redux)',
    link: 'https://cat-street.github.io/random-quote-machine/',
    repo: 'https://github.com/cat-street/random-quote-machine',
    img: imageQuotes,
    imgHi: imageQuotesHi,
  },
  {
    name: 'Pomodoro Timer',
    stack: '(JavaScript, React, HTML, CSS)',
    link: 'https://cat-street.github.io/pomodoro-timer-react/',
    repo: 'https://github.com/cat-street/pomodoro-timer-react',
    img: imagePomodoro,
    imgHi: imagePomodoroHi,
  },
  {
    name: 'CatLogic Clock',
    stack: '(HTML, CSS, JavaScript)',
    link: 'https://cat-street.github.io/catlogic-clock/',
    repo: 'https://github.com/cat-street/catlogic-clock',
    img: imageClock,
    imgHi: imageClockHi,
  },
];

export {
  LEARN_STRING, HEADER_STACK, STACK, PROJECTS, SOCIAL,
};
