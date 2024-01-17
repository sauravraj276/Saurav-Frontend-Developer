import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainBanner from './components/mainBanner/MainBanner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainBanner/>
    </div>
  );
}

export default App;
