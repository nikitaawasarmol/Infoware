import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div``
const Price = styled.div``
const Image = styled.img``
const AddRemove = styled.div``


const Cart = ({cart, setcart, handleChange}) => {
  const[price, setprice] = useState(0);
  console.log("first");

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
    handlePrice();
    console.log("handkeremove")
  }
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setprice(ans);
    console.log("handleprice");
  };
  useEffect(() => {
    handlePrice();
  })
  return (
    <>
      <Container>
       {cart.map((item) => (
        <div key={item.id}>
          <Image>
            <img src="{item.img}" alt="" />
            <p>{item.title}</p>
          </Image>
          <AddRemove>
            <button onClick={() => handleChange(item, 1)}>
              +
            </button>
            <button>{item.price}</button>
            <button onClick={() => handleChange(item, -1)}>
              -
            </button>
          </AddRemove>
          <Price>
            Total Price of your cart: Rs - {price}
          </Price>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
         </div>
        
       ))}
    </Container>
    </>
   
  )
}

export default Cart