import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
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

const NavLogo = styled(Link)`
  background: transparent;
  color: white;
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
      position:absolute;
      left:0;
      top:10px;
    }
  }
`;

const Span = styled.span`
  background: transparent;
  padding: 0 4px;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 640px) {
    font-size: 25px;
    font-weight: bold;
  }
`;

const MobileIcon = styled.div`
  background: transparent;
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    cursor: pointer;
    font-size: 2rem;
    color: white;
  }
`;


const SearchContainer = styled.div`
background: transparent;
display: flex;
align-items: center;
justify-content: end;
width:3000px;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 640px) {
  display:none;
}
`;
const LoginContainer = styled.div`
background: transparent;
display: flex;
align-items: center;
justify-content: end;
width: 50%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 640px) {
  display: none;
}
`;


const LoginButton = styled.select`
  background-color:transparent;
  border: 1px solid grey;
  color:white;
  cursor:pointer;
  text-align: center;
  width:100%;
  height:40px;
  border-radius:10px;
  overflow:hidden;
  &:hover{
    transform: scale(1.1);
    transition: 0.4s all ease-in-out;
    box-shadow: 0 0 2px 2px ${({theme})=> theme.text+90};
  }
`;

const SearchBar = styled.input`
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  width: 100%;
  height: 50%;
  text-align: center;

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
    transform: scale(1.4);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
  }

`;

const MobileMenu = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 60px;
  right: 0;
  width: ${({ open }) => (open ? "10vw" : "100%")};
  padding: 12px 40px 24px 40px;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  border-radius: 0 0 0px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "0")};
`;

const MobileLink = styled(Link)`
  background: transparent;
  text-decoration: none;
  cursor: LoginLinkpointer;
`;

const Option = styled.option`
  background: tranparent;
  text-decoration: none;
  cursor: pointer;
  border-radius:10px;
`;

const NavBar = () => {
  const [Open, setOpen] = React.useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <Span>Ecommerce</Span>
        </NavLogo>
        <MobileIcon>
          <GiHamburgerMenu
            onClick={() => {
              setOpen(!Open);
            }}
          />
        </MobileIcon>
        <SearchContainer>
          <SearchBar placeholder="Search for your product."></SearchBar>
          <SearchButton>
            <FaSearch />
          </SearchButton>
          </SearchContainer>
          <LoginContainer>
          <LoginButton >
          <Option disabled selected>Sign In/Sign Up </Option>
          <Option>Sign In </Option>
          <Option>Sign Up </Option>
          </LoginButton>
          </LoginContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={Open}>
          <MobileLink>Home</MobileLink>
          <MobileLink>Brands</MobileLink>
          <MobileLink>Categories</MobileLink>
          <MobileLink>About</MobileLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;
