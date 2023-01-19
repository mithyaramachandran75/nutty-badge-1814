import './App.css';
import Home from './components/Home';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar1 />
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />

        <div>
          <p style={{width: '250px',fontSize:"1.5rem", textAlign: 'center'}}>𝚂𝚑𝚘𝚙 𝙱𝚢 𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚢</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
      </div>
      <Home />
      <Homepage />
    </div>
  );
}

export default App;
