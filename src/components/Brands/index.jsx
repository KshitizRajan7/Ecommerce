import React from "react";
import styled from "styled-components";
import mustang from "../../assets/mustang.png";

const BrandContainer = styled.div`
  display: flex;
  background: #1c2831;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 100px 10px;
`;

const BrandTitle = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 50px;
`;

const Card = styled.a`
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  text-decoration: none;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(255, 255, 255, 0.2);
    filter: brightness(1.1);
  }
  border: 1px solid ${({ theme }) => theme.text + 80};
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 15px -5px;

`;
const ImageContainer = styled.div`
  display: flex;
  justify-conten: center;
  align-items: center;
`;
const CardImage = styled.img`
  width: 260px;
  height: 180px;
  object-fit: cover;

`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const CardDesc = styled.div`
  font-weight: 400;
`;

const Brands = () => {
  return (
    <BrandContainer id='brands'>
      <BrandTitle>Brands</BrandTitle>
      <CardContainer>
        <Card>
          <ImageContainer>
            <CardImage src={mustang} alt="image" />
          </ImageContainer>
          <Details>
            <CardTitle>Title</CardTitle>
            <CardDesc>xzcxzcxzcxzc</CardDesc>
          </Details>
        </Card>
        <Card>
          <ImageContainer>
          <CardImage src={mustang} alt="image" />
          </ImageContainer>
          <Details>
          <CardTitle>Title</CardTitle>
          <CardDesc>xzcxzcxzcxzc</CardDesc>
          </Details>
        </Card>
      </CardContainer>
    </BrandContainer>
  );
};

export default Brands;
