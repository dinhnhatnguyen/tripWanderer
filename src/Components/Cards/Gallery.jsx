import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const GalleryContainer = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  overflow: hidden;

  &.grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    height: 100%;
    column-gap: 5px;

    .gallery-item:first-child {
      grid-row: span 2;
      height: 100%;
    }

    .gallery-item:nth-child(2) {
      grid-row: 1 / span 1;
      grid-column: 2;
    }

    .gallery-item:nth-child(3) {
      grid-row: 2 / span 1;
      grid-column: 2;
    }
  }

  .gallery-item {
    position: relative;
    cursor: pointer;
    width: 100%; /* Make sure the item occupies the full width of its grid cell */
    height: 100%; /* Ensures that the image covers the entire grid cell */

    img {
      width: 100%;
      height: 100%; /* Ensure the image takes up the full area of the item */
      object-fit: cover; /* Ensure the image covers the entire area without stretching */
    }
  }

  .right-row img:last-child {
  }

  .d-none {
    display: none !important;
  }
`;

const Gallery = () => {
  const [images] = useState([
    "https://picsum.photos/id/1018/1000/600/",
    "https://picsum.photos/id/1015/1000/600/",
    "https://picsum.photos/id/1021/1000/600/",
    "https://picsum.photos/id/1025/1000/600/",
    "https://picsum.photos/id/1035/1000/600/",
    "https://picsum.photos/id/1050/1000/600/",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const renderGallery = () => {
    if (images.length <= 2) {
      return (
        <GalleryContainer className="d-flex justify-content-center align-items-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleClick(index)}
            >
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </GalleryContainer>
      );
    } else {
      return (
        <GalleryContainer className="gallery grid">
          <div className="gallery-item" onClick={() => handleClick(0)}>
            <img src={images[0]} alt="Image 1" />
          </div>
          <div className="right-row">
            <div className="gallery-item" onClick={() => handleClick(1)}>
              <img src={images[1]} alt="Image 2" />
            </div>
            <div className="gallery-item" onClick={() => handleClick(2)}>
              <img src={images[2]} alt="Image 3" />
            </div>
          </div>
        </GalleryContainer>
      );
    }
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {renderGallery()}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((src, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === currentIndex ? "active" : ""
                        }`}
                      >
                        <img
                          src={src}
                          className="d-block w-100"
                          alt={`Image ${index + 1}`}
                          style={{ maxHeight: "80vh", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
