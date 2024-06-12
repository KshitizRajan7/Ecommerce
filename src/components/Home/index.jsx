import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel/Carousel';
import { CarouselData } from '../../data/carouselData';

const Container = styled.div`
  width:100%;
  background-color: ${({theme})=> theme.body};
`;

const HomeContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

const Title = styled.h1`
  color:black;
  color: ${({theme})=> theme.text};
  text-align:center;
`;

const CarousalContainer = styled.div`
  width:100%;
  color: black;
`;


const Home = () => {
  return (
    <Container id="home">
      <HomeContainer>
        <Title>Latest Arrivals</Title>
        <CarousalContainer>
        <Carousel data={CarouselData}/>
        </CarousalContainer>   
      </HomeContainer>
    </Container>
  )
}

export default Home
