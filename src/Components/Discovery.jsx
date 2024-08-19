import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout/Layout";
import TripCard from "./Cards/Trip";
import Gallery from "./Cards/tmp";
import { getTrips } from "../lib/controller";

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

  console.log(trips[0]);
  if (loading) {
    return <div>Đang tải...</div>; // Hiển thị loading khi dữ liệu đang được tải
  }

  // const handleNewTrip = () => {
  //   fetchTrips();
  // };
  return (
    <Layout>
      <Header>
        <h1>Xin chào!</h1>
        <p>Khám phá những chuyến đi tuyệt vời cùng TripWanderer</p>
      </Header>
      <Main>
        <ImageGrid>
          {loading ? (
            <p>Đang tải bài viết...</p>
          ) : (
            trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
          )}

          {/* <TripCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/posts%2F1723682298797_IMG_8741.JPG?alt=media&token=ead58352-2e26-4c1a-8068-b6c92430cd82"
            title="Nửa ngày ở Hạ Long thì làm gì? Chill Beach Bar siêu cuố..."
            rating={99}
            distance={5}
            duration="Trong ngày"
            author={{
              name: "Nhat Nguyen",
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            isFree={true}
          />

          <TripCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/posts%2F1723682298797_IMG_8741.JPG?alt=media&token=ead58352-2e26-4c1a-8068-b6c92430cd82"
            title="Nửa ngày ở Hạ Long thì làm gì? Chill Beach Bar siêu cuố..."
            rating={99}
            distance={5}
            duration="Trong ngày"
            author={{
              name: "Nhat Nguyen",
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            isFree={true}
          />
          <TripCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/posts%2F1723682298797_IMG_8741.JPG?alt=media&token=ead58352-2e26-4c1a-8068-b6c92430cd82"
            title="Nửa ngày ở Hạ Long thì làm gì? Chill Beach Bar siêu cuố..."
            rating={99}
            distance={5}
            duration="Trong ngày"
            author={{
              name: "Nhat Nguyen",
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            isFree={true}
          />
          <TripCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/posts%2F1723682298797_IMG_8741.JPG?alt=media&token=ead58352-2e26-4c1a-8068-b6c92430cd82"
            title="Nửa ngày ở Hạ Long thì làm gì? Chill Beach Bar siêu cuố..."
            rating={99}
            distance={5}
            duration="Trong ngày"
            author={{
              name: "Nhat Nguyen",
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            isFree={true}
          />
          <TripCard
            imageUrl="https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/posts%2F1723682298797_IMG_8741.JPG?alt=media&token=ead58352-2e26-4c1a-8068-b6c92430cd82"
            title="Nửa ngày ở Hạ Long thì làm gì? Chill Beach Bar siêu cuố..."
            rating={99}
            distance={5}
            duration="Trong ngày"
            author={{
              name: "Nhat Nguyen",
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            isFree={true}
          /> */}

          {/* {destinations.map((destination, index) => (
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
          ))} */}
        </ImageGrid>
      </Main>
      <Footer>&copy; 2023 TripWanderer. All rights reserved.</Footer>
    </Layout>
  );
};

export default Discovery;
