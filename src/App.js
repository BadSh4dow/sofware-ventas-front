import './App.css';
import Renglones from './components/body/renglones';
import TopHeader from './components/header/TopHeader';
import UnderHeader from './components/header/UnderHeader';

function App() {
  return (
    <div className='app'>
      <TopHeader/>
      <UnderHeader/>
      <Renglones/>
    </div>
  );
}

export default App;
