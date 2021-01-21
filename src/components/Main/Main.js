import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Lead from '../Lead/Lead';
import Stack from '../Stack/Stack';
import Blog from '../Blog/Blog';
import './Main.css';
import Spinner from '../Spinner/Spinner';

const Projects = lazy(() => import('../Projects/Projects'));

function Main({ sendMessage, getBlog }) {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/projects">
          <Suspense fallback={<Spinner />}>
            <Projects />
          </Suspense>
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
