import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTop.css';

function BackToTop() {
  const button = useRef();

  const showToTopButton = () => {
    if (
      document.body.scrollTop > 200
      || document.documentElement.scrollTop > 200
    ) {
      button.current.classList.remove('to-top-button_hidden');
    } else {
      button.current.classList.add('to-top-button_hidden');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', showToTopButton);
  });

  return (
    <button
      onClick={scrollToTop}
      className="to-top-button to-top-button_hidden"
      type="button"
      ref={button}
    >
      <FontAwesomeIcon icon={faAngleDoubleUp} />
    </button>
  );
}

export default BackToTop;
