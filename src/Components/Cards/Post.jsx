import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons/faShare";

const PostContainer = styled.div`
  max-width: 100vw;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserName = styled.h5`
  margin: 0;
`;

const PostContent = styled.p`
  margin: 15px 0;
`;

const PostImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  border-top: 1px solid gray;
`;

const InteractionButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  &:hover {
    color: #007bff;
  }
`;

const Post = () => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar src="https://via.placeholder.com/50" alt="User Avatar" />
        <UserName>John Doe</UserName>
      </PostHeader>
      <PostContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc
        libero, posuere id venenatis non, accumsan ut urna.
      </PostContent>
      <PostImage src="https://via.placeholder.com/600x400" alt="Post Image" />
      <PostFooter>
        <InteractionButton>
          <FontAwesomeIcon icon={faHeart} /> Like
        </InteractionButton>
        <InteractionButton>
          <FontAwesomeIcon icon={faComment} /> Comment
        </InteractionButton>
        <InteractionButton>
          <FontAwesomeIcon icon={faShare} /> Share
        </InteractionButton>
      </PostFooter>
    </PostContainer>
  );
};

export default Post;
