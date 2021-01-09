import contactApi from '../../utils/contactApi';
import blogApi from '../../utils/blogApi';
import 'normalize.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import './App.css';

function App() {
  const sendMessage = (values) => contactApi.sendMessage(values);
  const getBlog = () => blogApi.getData();

  return (
    <div className="app">
      <Header />
      <Main sendMessage={sendMessage} getBlog={getBlog} />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
