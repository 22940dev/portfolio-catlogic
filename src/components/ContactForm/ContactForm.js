import { useState } from 'react';
import api from '../../utils/api';
import './ContactForm.css';

function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    grandmas_khaki_cracked_plate: '',
  });
  const [errMessage, setErrMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [disabled, setDisabled] = useState(false);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setErrMessage('');
    try {
      setDisabled(true);
      await api.sendMessage(values);
      setButtonText('Thank you!');
      setValues((values) => ({ ...values, name: '', email: '', message: '' }));
      setTimeout(() => {
        setButtonText('Submit');
      }, 5000);
    } catch (err) {
      setErrMessage('Message not sent!');
      console.error(err);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <div className="form__error-message">{errMessage}</div>
      <label className="form__windy-check">
        <input
          type="checkbox"
          name="grandmas_khaki_cracked_plate"
          value="1"
          tabIndex="-1"
          autoComplete="no"
          onChange={handleChange}
        />{' '}
        Accept
      </label>
      <label className="form__label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="form__input"
        placeholder="John Catsmith"
        minLength="2"
        maxLength="60"
        onChange={handleChange}
        value={values.name}
        disabled={disabled}
        required
      />
      <label className="form__label" htmlFor="email">
        E-mail
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form__input"
        placeholder="john@catsmith.com"
        minLength="2"
        maxLength="60"
        onChange={handleChange}
        value={values.email}
        disabled={disabled}
        required
      />
      <label className="form__label" htmlFor="message">
        Message
      </label>
      <textarea
        className="form__message form__input"
        name="message"
        id="message"
        placeholder="Hi, Andrey. The reason I'm writing..."
        onChange={handleChange}
        value={values.message}
        disabled={disabled}
        required
      ></textarea>
      <button className="form__submit" type="submit" value="Send">
        {buttonText}
      </button>
    </form>
  );
}

export default ContactForm;
