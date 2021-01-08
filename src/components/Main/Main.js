import Contacts from '../Contacts/Contacts';
import Lead from '../Lead/Lead';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Lead />
      <Stack />
      <Projects />
      <Contacts />
    </main>
  );
}

export default Main;
