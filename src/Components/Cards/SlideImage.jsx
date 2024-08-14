import React from "react";
import image1 from "../Asset/test/HonVuon.jpg";
import image2 from "../Asset/test/1920x1080(Muì).png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SlideContainer = styled.div`
  max-width: 100%;
`;
const SlideImage = () => {
  return (
    <SlideContainer>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide"
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="" />
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </SlideContainer>
  );
};

export default SlideImage;
