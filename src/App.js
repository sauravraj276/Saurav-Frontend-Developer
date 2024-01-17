import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainBanner from "./components/mainBanner/MainBanner";
import SearchSection from "./components/searchSection/SearchSection1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBanner />
      <SearchSection />
    </div>
  );
}

export default App;
