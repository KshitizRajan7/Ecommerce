import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import { ThemeProvider } from 'styled-components';
import { darkMode } from './themes/themes';
import Home from './components/Home';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css';
const Body = styled.div`
width:100%;
height:100%;
background:${({theme})=> theme.body};
color:${({theme})=> theme.text};

`;

const App = () => {
  return (
    <ThemeProvider theme={darkMode}>
      <BrowserRouter>
      <NavBar/>
      <NavBar2/>
      <Body>
      <Home/>
      <Brands/>
      <Categories/>
      <Footer/>
      </Body>
      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
