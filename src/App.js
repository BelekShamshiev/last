import './App.css';
import React from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import BuildBase from "./components/BuildBase/Build";
import BestCoffee from "./components/BestCoffee/Best";
import DataSlider from "./components/DataSlider/Data";
import Client from './components/Client/Client';
import Coffeedespina from './components/Coffeedespina/Coffeedespina';
import Footer from './components/Footer/Footer';
import Burger from './components/Burger/Burger';
import LOK from "./components/Discovery/Discovery";
import Main from './Pages/Main/Main';
function App() {
  return (
    <div className="App">  
    <Routes>
      <Route path='/' element={<Main/>}>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
