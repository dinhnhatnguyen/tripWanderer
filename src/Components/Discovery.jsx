import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout/Layout";
import TripCard from "./Cards/TripCard";
import Gallery from "./Cards/tmp";
import { getTrips } from "../lib/controller";
import ImageUpload from "./Cards/ImageUpload";
import SearchTrip from "./Form/SearchTrip";

const Main = styled.main`
  padding: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Footer = styled.footer`
  background-color: #f4f4f4;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

const Banner = styled.div`
  width: 100%;
  height: 285px;
  display: flex;
  color: #fff;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/wallpaperflare.com_wallpaper%20(1).jpg?alt=media&token=39d0f1b6-83e2-4df1-a55e-5e2226ff80e6");
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 612px;
  max-height: 180px;
  margin: 0 auto;
  border-radius: 20px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;

  h1 {
    color: #046cb8;
    font-weight: bold;
  }

  p {
    color: #1a1a1a;
    font-weight: bold;
  }
`;

const Discovery = () => {
  const [trips, setTrips] = useState([]); // State lưu trữ danh sách trips
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips(); // Gọi hàm getTrips để lấy dữ liệu
        setTrips(tripsData); // Lưu dữ liệu trips vào state
      } catch (error) {
        console.error("Error fetching trips: ", error);
      } finally {
        setLoading(false); // Đặt loading thành false sau khi dữ liệu được tải xong
      }
    };

    fetchTrips(); // Gọi hàm fetchTrips khi component được mount
  }, []);

  console.log(trips);
  if (loading) {
    return <div>Đang tải...</div>; // Hiển thị loading khi dữ liệu đang được tải
  }

  return (
    <Layout>
      <Banner>
        <TitleContainer>
          <h1>Xin chào!</h1>
          <p>Khám phá những chuyến đi tuyệt vời cùng TripWanderer</p>
          <SearchTrip />
        </TitleContainer>
      </Banner>

      <Main>
        <ImageGrid>
          {loading ? (
            <p>Đang tải bài viết...</p>
          ) : (
            trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
          )}
        </ImageGrid>
      </Main>
      <Footer>&copy; 2023 TripWanderer. All rights reserved.</Footer>
    </Layout>
  );
};

export default Discovery;
