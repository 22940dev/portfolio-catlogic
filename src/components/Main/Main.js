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
        <Route exact path="/blog">
          <Blog getBlog={getBlog} />
        </Route>

        <Route path="/">
          <Lead />
          <Stack />
          <Projects />
          <Contacts sendMessage={sendMessage} />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
