import Header from './components/Header';
import LandingAlert from './components/LandingAlert';
import News from './components/News';
import 'emerald-ui/lib/styles.css';
import './App.scss';

const App = () => {
  return (
    <>      
      <Header />
      <main className="eui-container">
        <LandingAlert />
        <News />
      </main>      
    </>
  );
}

export default App;
