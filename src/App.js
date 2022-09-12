import './App.css';
import {Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
     
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/addUser" element={<AddUser />} />

      </Routes>
     
    
    </div>
  );
}

export default App;
