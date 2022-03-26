import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Answers from './components/Answers/Answers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;
