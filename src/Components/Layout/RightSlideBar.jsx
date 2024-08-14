import React from "react";
import styled from "styled-components";
import addImage from "../Asset/image/IMG_0642.jpeg";

// const RightSidebarWrapper = styled.aside`
//   width: 200px;
//   min-height: 100vh
//   padding: 20px;
//   overflow-y: auto;
//   position: absolute;
//   right: 0;
//   top: 65px;
//   bottom: 0;
//   background-color: #ffff;
//   margin-top: 10px;
// `;
const RightSidebarWrapper = styled.div`
  // margin-top: 10px;
  // position: absolute;
  // right: 0;
  margin-left: auto;
  top: 65px;
  width: 200px;
  min-height: 100vh;
  background-color: #ffff;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 175px;
  margin: 20px;
  border-radius: 16px;
`;

const RightSlidebar = () => {
  return (
    <RightSidebarWrapper>
      <ImageContainer>
        <Image src={addImage} alt="Destination 1" />
      </ImageContainer>
      <ImageContainer>
        <Image src={addImage} alt="Destination 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src={addImage} alt="Destination 1" />
      </ImageContainer>
      <ImageContainer>
        <Image src={addImage} alt="Destination 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src={addImage} alt="Destination 1" />
      </ImageContainer>
      <ImageContainer>
        <Image src={addImage} alt="Destination 2" />
      </ImageContainer>
    </RightSidebarWrapper>
  );
};

export default RightSlidebar;
