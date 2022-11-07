import { useState } from 'react';
import './App.css';
import Announcement from './components/Announcement';
import Blank from './components/Blank';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import PathRoutes from './components/PathRoute';
import Slider from './components/Slider';
import Trending from './components/Trending';

const App = () => {
  const [show, setshow] = useState(true)
  const [cart, setcart] = useState([])

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setcart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setcart([...arr]);
  };


  return (
    <div className="App">
      <Announcement />
      <Navbar setshow = {setshow} size={cart.length}/>
      {show ? ( <Blank handleClick={handleClick} /> 
      ) : ( 
      <Cart cart={cart} setcart={setcart} handleChange={handleChange} /> )}  
      <Slider />
      <Trending />
      <Categories />
      <Footer />
      
      
      
    </div>
  );
}

export default App;
