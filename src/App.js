import './App.scss';
import 'emerald-ui/lib/styles.css';
import Header from './components/Header';
import LandingAlert from './components/LandingAlert';

const App = () => {
  return (
    <>      
      <Header />
      <main className="eui-container">
        <LandingAlert />
      </main>      
    </>
  );
}

export default App;
