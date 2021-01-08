import { SOCIAL } from '../../constants/constants';
import SocialElement from '../SocialElement/SocialElement';
import './Social.css';

function Social() {
  return (
    <ul className="social">
      {SOCIAL.map((el) => (
        <SocialElement {...el} key={el.name} />
      ))}
    </ul>
  );
}

export default Social;
