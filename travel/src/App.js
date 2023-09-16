import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Card from './components/card.js';
import data from './components/data.js';
import './components/main.css';

function App() {
  let card_data = data.map((item)=>{
    return(
      <Card 
      img = {item.img}
      country = {item.country}
      location = {item.location}
      date = {item.date}
      text = {item.text}
      />
    );
  })

  return (
    <div className="app">
      <Navbar/>
      <div className = "hero">
    
      {card_data}
      </div>
    </div>
  );
}

export default App;
