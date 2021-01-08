import ContactForm from '../ContactForm/ContactForm';
import Social from '../Social/Social';
import './Contacts.css';

function Contacts() {
  return (
    <section id="contact" className="contact">
        <div className="contact__column">
          <h2 className="contact__title">Contact me</h2>
          <ContactForm />
        </div>
        <div className="contact__column">
          <h2 className="contact__title">Social</h2>
          <Social />
        </div>
    </section>
  );
}

export default Contacts;
