import logo from './logo.svg';
import './App.css';
import {Route,  Routes} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Counter from './components/Day-3/useState';
import UseReducer from './components/09-03-24/UseReducer';
import PropsDrilling from './components/09-03-24/PropsDrilling';
import { useState } from 'react';
import AllProduct from './components/10-03-24/AllProduct';
import FeckAllProduct from './components/10-03-24/fakeAllProduct';
import ProviderCounterContext from './components/context/ProviderCounterContext';
import TodoApp from './components/15-03-24/TodoApp';
import TodoList from './components/15-03-24/todolista';
import FackSingleProduct from './components/16-03-24/FackSingleProduct';
import PageNot from './components/PageNot';
import Navbar from './components/globlecontext/navbar';
import Footer from './components/globlecontext/Footer';
import Theme from './components/Theme';
import CounterRedux from './components/Redux20-03/CounterRedux';
import UseMemo from './components/22-03-24/UseMemo';
import UseCallBack from './components/23-03-24/UseCallBack';
import ThemeRedux from './components/Redux20-03/ThemeRedux';
import MovieInfo from './components/29-03-24/MovieInfo';



function App() {
  const[students,setStudents]=useState(["a","b","c","d","e"])
  const[counter,setCounter]=useState(12345)

  const[product,setProduct]=useState([{
    name:"T-shirt" , image:"https://m.media-amazon.com/images/I/517v6K+sR-L._SX679_.jpg",Price:"300",quantity:"10"},
    {name:"kurta" , image:"https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21_3.jpg?v=1681723151&width=600",Price:"1200",quantity:"5"},
    {name:"jeans" , image:"https://3brothersmenshub.com/wp-content/uploads/2023/02/jeans-500x500-1.jpg",Price:"500",quantity:"8"},
    {name:"jacket" , image:"https://images-cdn.ubuy.co.in/653823c2ba78ad77ac2c88d0-tacvasen-men-39-s-cotton-jackets-winter.jpg",Price:"1000",quantity:"7"}])
  return (
    <div >
    <Navbar />
     <Routes>  
      <Route path='*' element={<PageNot/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='register-page' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='counter' element={<Counter/>} />
      <Route path='/use-reducer' element={<UseReducer/>} />
      <Route path='props-drilling' element={<PropsDrilling students={students} counter={counter}/>} />
      <Route path='all-products' element={<AllProduct product={product} />} />
      <Route path='fack-all-product' element={<FeckAllProduct/>}/>
      <Route path='counter-context' element={<ProviderCounterContext/>} />
      <Route path='todo-app' element={<TodoApp/>} />
      <Route path='todolist' element={<TodoList/>} />
      <Route path='fack-single-product/:id' element={<FackSingleProduct/>} />
      <Route path='/theme' element={<Theme/>} />
      <Route path='counter-redux' element={<CounterRedux/>} />
      <Route path='/use-memo' element={<UseMemo/>} />
      <Route path='/use-callback' element={<UseCallBack/>} />
      <Route path='theme-redux' element={<ThemeRedux/>} />
      <Route path='movie-info' element={<MovieInfo/>} />
    
      

     </Routes>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
