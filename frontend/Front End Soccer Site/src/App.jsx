import './App.css'; 
import Login from './Pages/Login.jsx'; 
import Waiting from './Pages/Waiting.jsx';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login/>}/> 
        <Route path="/waiting" element={<Waiting/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;
