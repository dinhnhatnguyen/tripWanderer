import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Gallery from "./Cards/Gallery";

const TripDetailContainer = styled.div`
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

const TripHeader = styled.div`
  margin-top: 20px;
`;

const TripTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TripMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TripRating = styled.div`
  font-size: 0.9rem;
`;

const TripActions = styled.div`
  button {
    background: none;
    border: none;
    color: #007bff;
    margin-left: 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UpdateInfo = styled.div`
  font-size: 0.8rem;
  color: #6c757d;
  text-align: right; /* Align to the right */
`;

const UserContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-right: 10px;
  max-width: 66%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 2px;
`;

const UserRole = styled.span`
  font-size: 0.75rem;
  color: #666;
`;

const UserActions = styled.div`
  display: flex;
  gap: 8px;
`;

const UserActionButton = styled.button`
  background-color: ${(props) => (props.primary ? "#e0e0e0" : "white")};
  color: ${(props) => (props.primary ? "black" : "#666")};
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#d0d0d0" : "#f0f0f0")};
  }
`;
const PriceContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 15px;
  width: 35%;
  text-align: center;
`;
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
`;

const SocialActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  gap: 0.5em;
  padding: 0.5em;
  border-left: 2px solid #d0d0d0;
`;

const SocialButton = styled.button`
  // background: none;
  // border: none;
  // color: #007bff;
  // cursor: pointer;
  // font-size: 0.9rem;
  background-color: ${(props) => (props.primary ? "#e0e0e0" : "white")};
  color: ${(props) => (props.primary ? "black" : "#046cb8")};
  border: 2px solid #046cb8;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#d0d0d0" : "#f0f0f0")};
  }
`;

const TripSection = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const TripComponent = ({ trip }) => {
  return (
    <TripDetailContainer>
      <TripHeader>
        <TripTitle>{trip.title}</TripTitle>
        <TripMeta>
          <TripRating>
            <i className="fa-solid fa-star"></i> {trip.rating.score}% (
            {trip.rating.count} đánh giá) • {trip.local}
          </TripRating>
          <TripActions>
            <button>Yêu thích</button>
            <button>Chia sẻ</button>
          </TripActions>
        </TripMeta>
      </TripHeader>
      <Gallery />
      <InfoContainer>
        {/* <UserContainer>
          <UserInfo>
            <UserAvatar src="https://via.placeholder.com/50" alt="Bich Ngoc" />
            <UserDetails>
              <UserName>Bich Ngoc</UserName>
              <UserRole>Trip maker</UserRole>
            </UserDetails>
          </UserInfo>
          <UserActions>
            <UserActionButton>Theo dõi</UserActionButton>
            <UserActionButton>Nhắn tin</UserActionButton>
          </UserActions>
          <UpdateInfo>
            <i className="fas fa-clock"></i> Cập nhật lần cuối: 16 tháng 6, 2024
          </UpdateInfo>
        </UserContainer> */}

        <UserContainer>
          <UserInfo>
            <UserAvatar src="https://via.placeholder.com/40" alt="Bich Ngoc" />
            <UserDetails>
              <UserName>Bich Ngoc</UserName>
              <UserRole>Trip maker</UserRole>
            </UserDetails>
          </UserInfo>
          <UserActions>
            <UserActionButton>Theo dõi</UserActionButton>
            <UserActionButton>Nhắn tin</UserActionButton>
          </UserActions>

          <SocialActions>
            <SocialButton>Yêu thích</SocialButton>
            <SocialButton>Chia sẻ</SocialButton>
          </SocialActions>
        </UserContainer>

        <PriceContainer>
          <Price>{trip.price} VNĐ</Price>
          <BuyButton>Mua ngay</BuyButton>
        </PriceContainer>
      </InfoContainer>

      <TripSection>
        <SectionTitle>Tóm tắt</SectionTitle>
        <ul>
          {trip.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </TripSection>

      <TripSection>
        <SectionTitle>Giới thiệu trip</SectionTitle>
        <p>{trip.introduction}</p>
      </TripSection>

      <TripSection>
        <SectionTitle>Thông tin hành trình</SectionTitle>
        {trip.itinerary.map((day, index) => (
          <div key={index}>
            <h3>Ngày {day.day}</h3>
            {day.activities.map((activity, idx) => (
              <div key={idx}>
                <span>{activity.time}</span> -{" "}
                <span>{activity.description}</span>
              </div>
            ))}
          </div>
        ))}
      </TripSection>
    </TripDetailContainer>
  );
};

export default TripComponent;
