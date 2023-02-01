import './App.css';
import Botones from './components/body/botones';
import Renglones from './components/body/renglones';
import TopHeader from './components/header/TopHeader';
import UnderHeader from './components/header/UnderHeader';

function App() {
  return (
    <div className='app'>
      <TopHeader/>
      <UnderHeader/>
      <Botones/>
      <Renglones/>
    </div>
  );
}

export default App;
