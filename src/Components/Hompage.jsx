import React, { useState, useEffect } from "react";
import Post from "./Cards/Post";
import styled from "styled-components";
import SlideImage from "./Cards/SlideImage";
import Layout from "./Layout/Layout";
import PostForm from "./Form/CreatePost";
import { getPosts } from "../lib/controller";

const HomepageContainer = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-around;
  min-height: 100%;
  overflow-y: scroll;
  overflow: hidden;
  background-color: transparent;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 740px;
  padding: 10px;
  margin: 0 auto;
`;

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = () => {
    fetchPosts();
  };

  return (
    <Layout>
      <HomepageContainer>
        <ContentContainer>
          <SlideImage />
          <PostForm
            author={{
              name: "Nhat Nguyen",
              avatar:
                "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
            }}
            onPostCreated={handleNewPost}
          />
          {loading ? (
            <p>Đang tải bài viết...</p>
          ) : (
            posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                time={
                  post.createdAt
                    ? new Date(post.createdAt.seconds * 1000).toLocaleString()
                    : "Unknown time"
                }
                content={post.content}
                image={post.imageUrl}
                likes={post.likes}
                comments={post.comments}
                shares={post.shares}
              />
            ))
          )}
        </ContentContainer>
      </HomepageContainer>
    </Layout>
  );
};

export default Homepage;
