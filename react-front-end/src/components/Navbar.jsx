import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartRounded} from '@material-ui/icons'
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;`

const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;`
      ;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;`

const SearchContainer = styled.div`
    border: 0.5px solid  #ebeaea;
    border-radius: 40px;
    box-shadow: 1px 2px #888888;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
   
    background: #fff;
   
    display: flex;
    align-items: center;
    margin-left: 40px;
    padding: 5px;
` 


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `
    
const Input = styled.input`
  border:none;
  outline: none;
  margin-left: 5px; ;
`
const Center = styled.div`
  flex: 1;
  text-align: center;`

const Logo = styled.h1`
    font-weight: bold;
` 
const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;`
  
  ;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
              <Search style={{color:"#888888", fontSize:16}}/> 
              <Input/>
          </SearchContainer>
        </Left>
        <Center>
         <Logo>RSHOP</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem><Badge color="secondary"  badgeContent={1}>
          <ShoppingCartRounded/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
//min 25