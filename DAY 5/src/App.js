import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Add from './components/Add';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/homepage" element={<Home></Home>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
         {/* <Route path="/search" element={<Search></Search>}></Route> */}
        {/* <Route path="/filter" element={<Filter></Filter>}></Route> */} 
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;