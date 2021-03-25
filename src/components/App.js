import './App.css';
import Display from './Display/Display';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <div>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
