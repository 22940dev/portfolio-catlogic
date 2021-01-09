import { Route, Switch } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Lead from '../Lead/Lead';
import Projects from '../Projects/Projects';
import Stack from '../Stack/Stack';
import Blog from '../Blog/Blog';
import './Main.css';

function Main({ sendMessage, getBlog }) {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/blog">
          <Blog getBlog={getBlog} />
        </Route>

        <Route exact path="/contact">
          <Contacts sendMessage={sendMessage} />
        </Route>

        <Route path="/">
          <Lead />
          <Stack />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
