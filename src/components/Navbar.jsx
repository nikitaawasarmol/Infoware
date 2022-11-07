// import React, { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
// import { Link } from 'react-router-dom';
import {mobile} from './responsive';


const Container = styled.div`
    height: 60px;
    background-color: #3b006a;  
    ${mobile({
      height: "50px", 
    })}
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({
      padding: "1px", 
    })}
`

const Left = styled.div`
    color: white;
    flex: 1;
    display: flex;
    align-items: center;
`
const Street = styled.div`
    /* cursor: pointer; */
    display: flex;
    align-items: center;
    ${mobile({
      fontSize: "12px", 
    })}
`
const Center = styled.div`
    flex: 1;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    padding: 6px;
    color: #8d7d9a;
    background-color: white;
    border-radius: 12px;
    ${mobile({
      marginTop: "7px",
      marginLeft: "27px",
      padding: "2px",
      paddingLeft: "2px", 
      paddingRight: "7px",
      fontSize: "12px"
    })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const NavItem = styled.div`
    cursor: pointer;
    margin-left: 24px;
    color: white;
`


function Navbar({setshow, size}) {
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Street>
            Select your street name 
            <KeyboardArrowDownIcon cursor="pointer" />
          </Street>
        </Left>
        
        <Center>
          <SearchContainer>
          <Search />
            Search for over 5000 products
          </SearchContainer>
        </Center>
        
        <Right>
          <NavItem onClick={() =>setshow(false)}>
          <Badge badgeContent={size} color="primary">
            <ShoppingCartOutlined />
          </Badge>
          </NavItem>
          <NavItem onClick={()=>setshow(true)}>
              <PersonOutlineOutlined />
          </NavItem>
                    
          
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar