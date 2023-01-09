// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/UserDetails' element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;