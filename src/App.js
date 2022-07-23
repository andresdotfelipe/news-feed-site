import Header from './components/Header';
import LandingAlert from './components/LandingAlert';
import News from './components/News';
import Banner from './components/Banner';
import Contact from './components/Contact';
import 'emerald-ui/lib/styles.css';
import { Container } from 'emerald-ui/lib';
import './App.scss';

const App = () => {
  return (
    <>      
      <Header />      
      <Container>
        <LandingAlert />
        <News />
      </Container>
      <Banner />
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default App;
