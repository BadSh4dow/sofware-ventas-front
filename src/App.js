import './App.css';
import Botones from './components/body/botones';
import Renglones from './components/body/renglones';
import Footer from './components/footer/footer';
import TopHeader from './components/header/TopHeader';
import UnderHeader from './components/header/UnderHeader';

function App() {
  return (
    <div className='app'>
      <TopHeader/>
      <UnderHeader/>
      <Botones/>
      <Renglones/>
      <Footer/>
    </div>
  );
}

export default App;
