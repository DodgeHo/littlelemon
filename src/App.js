import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';
import Reservation from './Reservation';

/*
TODO:
 - Lookup Vercel Website Hosting?
 - Move Button to seperate React Component
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="reservation" element={<Reservation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
