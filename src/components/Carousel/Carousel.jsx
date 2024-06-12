import React, { useState } from 'react'
import styled from 'styled-components';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';

const Carousalitems = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    position:relative;
`;

const ArrowLeft = styled(BsArrowLeftCircleFill)`
  position:absolute;
  margin-left:2rem;
  width:2rem;
  height:2rem;
  color:white;
  left:1rem;
  background:transparent;
  cursor:pointer !important;
&:hover{
transform: scale(1.1);
}
  filter: drop-shadow(0px 0px 5px black);
`;

const ArrowRight = styled(BsArrowRightCircleFill)`
position:absolute;
margin-right:2rem;
width:2rem;
height:2rem;
color:white;
background:transparent;
right:1rem;
cursor:pointer !important; 
&:hover{
transform: scale(1.1);
}
  filter: drop-shadow(0px 0px 5px black);
`;

const Indicators = styled.span`
  display:flex;
  position:absolute;
  bottom:1rem;
  background:transparent;
`;

const Indicator= styled.button`
  background-color: white;
  height: 0.5rem;
  width:0.5rem;
  border-radius: 100%;
  border:none;
  outline:none;
  box-shadow: 0px 0px 5px black;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover{
    transform: scale(1.5);
  }
`;

const IndicatorInactive = styled.button`
  background-color: black;
  height: 0.5rem;
  width:0.5rem;
  border-radius: 100%;
  border:none;
  outline:none;
  box-shadow: 0px 0px 5px black;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover{
    transform: scale(1.5);
  }
`;

const Slide = styled.img`
  border-radius: 1rem;
  width:80%;
  height:500px;
  transition: 1s ease;
  object-fit:cover;
  transition: opacity 1s ease;
`;

const SlideHidden =styled.img`
  display: none;
`;

const  Carousel =  ({data}) => {
    const [slide, setSlide] =useState(0);
    const nextSlide=()=>{
      setSlide(slide === data.slides.length -1 ? 0 : slide + 1);
    }
    const prevSlide=()=>{
      setSlide(slide === 0 ? data.slides.length -1 : slide - 1);
    }
  return (
    <Carousalitems>
    <ArrowLeft onClick={prevSlide}/>
        {data.slides.map((item,index)=>{
         return (
          
            slide === index ?  <Slide src={item.src} alt={item.alt} key={index}/> :  <SlideHidden src={item.src} alt={item.alt} key={index}/>
          
          
        )
        })}
        <ArrowRight onClick={nextSlide}/>
        <Indicators>
        {data.slides.map((_,index) => {
          return slide === index ? <Indicator key={index} onClick={()=>setSlide(index)}></Indicator> : <IndicatorInactive key={index} onClick={()=>setSlide(index)}></IndicatorInactive> 
        
        })}</Indicators>
    </Carousalitems>
          )
}

export default Carousel
