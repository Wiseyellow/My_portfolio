
import './App.css';
import Bookingpage from './Pages/Bookingpage';
import Homepage from './Pages/Homepage';
import {Routes, Route} from 'react-router-dom'


function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<Bookingpage />} /> 
    </Routes>    
    </>
  )
}

export default App;
