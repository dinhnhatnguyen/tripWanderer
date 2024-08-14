import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout/Layout";

// Styled Components
const Header = styled.header`
  background-color: #0077b6;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Main = styled.main`
  padding: 2rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const DestinationBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 1rem;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0077b6;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005a8c;
    }
  }
`;

const Footer = styled.footer`
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

// Component
const Discovery = () => {
  // Dummy data
  const destinations = [
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },

    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },

    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },
    {
      image:
        "https://imgg.stripical.xyz/Bycq441-jwe0dpm5XfD_l-fYC7U=/500x/img.stripical.xyz/trip/6454b6dc40995f7e90fdcd5a/D01CF",
      name: "Nha Trang",
      price: "$ 199",
    },

    // Add more destination objects
  ];

  return (
    <Layout>
      <Header>
        <h1>Xin chào!</h1>
        <p>Khám phá những chuyến đi tuyệt vời cùng TripWanderer</p>
      </Header>
      <Main>
        <ImageGrid>
          {destinations.map((destination, index) => (
            <DestinationBox key={index}>
              <img src={destination.image} alt={destination.name} />
              <div className="overlay">
                <div className="price">{destination.price}</div>
                <div className="button">
                  Đặt ngay
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </DestinationBox>
          ))}
        </ImageGrid>
      </Main>
      <Footer>&copy; 2023 TripWanderer. All rights reserved.</Footer>
    </Layout>
  );
};

export default Discovery;
