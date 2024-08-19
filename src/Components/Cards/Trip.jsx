import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CardLink = styled(Link)`
  text-decoration: none;
  max-with: 176px;
  max-height: 240px
  color: inherit;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    color: inherit;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max- height: 140px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h5`
  margin-bottom: 10px;
`;

const Infor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  color: #6c757d;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const FreeTag = styled.span`
  // background-color: #28a745;
  color: #046cb8;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: auto;
`;

const TripCard = ({
  id,
  imageUrl,
  title,
  rating,
  distance,
  duration,
  author,
  isFree,
}) => {
  return (
    <CardLink to={`/tripdetails/${id}`} className="card">
      <Image src={imageUrl} className="card-img-top" alt="Trip location" />
      <Content className="card-body">
        <Title className="card-title">{title}</Title>
        <Infor>
          <InfoItem>
            <Icon icon={faSmile} /> {rating}%
          </InfoItem>
          <InfoItem>
            <Icon icon={faLocationDot} /> {distance} km
          </InfoItem>
          <InfoItem>
            <Icon icon={faClock} /> {duration}
          </InfoItem>
        </Infor>

        <Author>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <span>{author.name}</span>
          {isFree && <FreeTag>FREE</FreeTag>}
        </Author>
      </Content>
    </CardLink>
  );
};

export default TripCard;
