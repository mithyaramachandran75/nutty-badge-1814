import './App.css';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
 import Footer from "./components/Footer"
import AllRoutes from './Routes/AllRoutes';
import Main from './Routes/Main';
import Homepage from './Routes/Homepage';
import "react-toastify/dist/ReactToastify.css";
// -----------------------------------------------


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
      <AllRoutes />
      <Homepage />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
