import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import { FaSearch } from "react-icons/fa";
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position:sticky;
  top:0;
  z-index:10;
`;

const NavContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 90%;
`;



const NavItems = styled.ul`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  list-style: none;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Scroll)`
  background: transparent;
  color: ${({theme})=> theme.text +90};
  cursor: pointer;
  text-decoration: none;
  &:hover{
    transform: translateY(-5px);
    transition: 0.4s all ease-in-out;
    color: ${({theme})=> theme.text}; 
  }
`;


const SearchContainer = styled.div`
  background: transparent;
  display: none;
  align-items: center;
  justify-content: end;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display:flex;
    position: absolute;
    left:0;
    width:250px;
  }
`;


const SearchBar = styled.input`

  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  width: 100%;
  height: 50%;
  text-align: center;
  @media screen and (max-width: 640px){
    display:flex;
    
  }

`;

const SearchButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border:none;
  width: 50px;
  font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
  }

  @media screen and (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const NavBar2 = () => {
  const [Open, setOpen] = React.useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavItems>
          <NavLink activeClass='active' to='home' spy={true} smooth={true} offset={-110} duration={500}>Home</NavLink>
          <NavLink activeClass="active" to='brands' spy={true} smooth={true} offset={50} duration={500}>Brands Available</NavLink>
          <NavLink activeClass='active' to='categories' spy={true} smooth={true} offset={50} duration={500}>Categories Available</NavLink>
          <NavLink activeClass='active' to='footer' spy={true} smooth={true} offset={-80} duration={500}>Contact Us</NavLink>
        </NavItems>
        <SearchContainer>
        <SearchBar/>
        <SearchButton>
        <FaSearch/>
        </SearchButton>
        </SearchContainer>
      </NavContainer>
    </Nav>
  );
};

export default NavBar2;
