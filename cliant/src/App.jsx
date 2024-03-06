import logo from './logo.svg';
import './App.css';
import {Route,  Routes} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Counter from './components/Day-3/useState';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='counter' element={<Counter/>} />
     </Routes>
    </div>
  );
}

export default App;
