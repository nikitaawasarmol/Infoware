import React from 'react'
import styled from 'styled-components'
import ImageSlider, { Slide } from "react-auto-image-slider";
import {mobile} from './responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    ${mobile({
      width: "100%",
      height: "50%",
      objectFit: "cover"
    })}
`


function Slider() {
  return (
    
    <Container>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img style={{width:"70%", height:"85%"}} alt="img2" src="https://i.ibb.co/bd2SCcv/banner1.jpg" />
      </Slide>
      <Slide>
        
        <img style={{width:"70%", height:"85%"}} alt="img2" src="https://i.ibb.co/PtW4CQq/banner2.jpg" />
      </Slide>
      <Slide>
        
        <img style={{width:"70%", height:"85%"}} alt="img1" src="https://i.ibb.co/QYBJ7vT/banner3.jpg" />
      </Slide>
    </ImageSlider>
    </Container>
  )
}

export default Slider