// import React, { useState } from 'react'
import styled from 'styled-components'
import TrendingItem from './TrendingItem'
import { trending } from './data'
import {KeyboardArrowRightOutlined } from '@mui/icons-material'
import { mobile } from './responsive'
const Container = styled.div` 
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
      flexDirection: "column", 
    })}
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
 
`

const Trending = ({handleClick}) => {
  return (
  <>    
  <Heading>
    <h3 style={{fontSize:"23px"}}>Trending Near You</h3>
    <h3 style={{fontSize: "15px", color:"#FA2966", display:"flex", justifyContent:"center", alignItems: "center", cursor: "pointer"}}>
      See All
      <KeyboardArrowRightOutlined />
    </h3>
  </Heading>
  
  <Container>
    {trending.map((item)=>(
    <TrendingItem key={item.id} item={item}  handleClick={handleClick}/>
    ))}    
  </Container>

</>
  )
}

export default Trending