import './App.css';
import AddTranstion from './Component/AddTranstion';
import Balance from './Component/Balance';
import Header from './Component/Header';
import IncomeExpance from './Component/IncomeExpance';
import TransctionList from './Component/TransctionList';
import { GlobleProvider } from './Context/GlobleState';

function App() {
  return (
    <div className="App">
    <GlobleProvider>
    <Header/>
    <div class="container">
    <Balance/>
    <IncomeExpance/>
    <TransctionList/>
    <AddTranstion/>
    </div>
    
    </GlobleProvider>
    
    
    
  
    </div>
  );
}

export default App;
