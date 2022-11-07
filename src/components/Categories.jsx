import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import CategoriesItem from './CategoriesItem'
import { categories } from './data'


const Container = styled.div` 
    display: flex;
    flex: 1;
    justify-content: space-around;

`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`


function Categories() {
  return (
    <>
    <Heading>
        <h3 style={{
      fontSize:"23px"
    }}>Explore By Categories</h3>
        <h3 style={{
      fontSize: "15px", color:"#FA2966", display:"flex", justifyContent:"center", alignItems: "center" , cursor:"pointer"
    }}>See All<KeyboardArrowRightOutlined /></h3>
    </Heading>
    <Container>
    {categories.map(item=>(
    <CategoriesItem item={item} key={item.id}/>
    ))}   
    </Container>
    </>
    
  )
}

export default Categories