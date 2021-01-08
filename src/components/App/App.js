import 'normalize.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
