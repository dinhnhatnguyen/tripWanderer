// import React from "react";
// import Post from "./Cards/Post";
// import styled from "styled-components";
// import SlideImage from "./Cards/SlideImage";
// import SocialMediaPost from "./Cards/tmp";

// const HompageContainer = styled.div`
//   // max-width: 100%;
// `;

// // const postData = {
// //   username: "hmquandec",
// //   avatarUrl:
// //     "https://ytclonebynhat.s3.ap-southeast-1.amazonaws.com/dd314055-8291-4fe5-be6e-e9e2581db5d5JPG",
// //   timestamp: "2 ngày",
// //   content:
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa deleniti vel neque! Saepe modi totam possimus? Quaerat, mollitia perferendis corporis iure delectus, ratione veniam, expedita corrupti aliquid veritatis sed?",
// //   imageUrl:
// //     "https://ytclonebynhat.s3.ap-southeast-1.amazonaws.com/3d879183-417f-4242-a939-4c37dac29eacJPG",
// //   likes: 12,
// //   comments: [
// //     { username: "user1", content: "Great post!" },
// //     { username: "user2", content: "Nice picture!" },
// //   ],
// //   shares: 2,
// // };

// const Hompage = () => {
//   return (
//     <HompageContainer>
//       <SlideImage />
//       <Post />
//       {/* <SocialMediaPost post={postData} /> */}
//     </HompageContainer>
//   );
// };

// export default Hompage;

import React from "react";
import Post from "./Cards/Post";
import styled from "styled-components";
import SlideImage from "./Cards/SlideImage";
import SocialMediaPost from "./Cards/tmp";
import Layout from "./Layout/Layout";
// import Post from "./Cards/Post";
import testimg from "./Asset/test/HonVuon.jpg";

const HompageContainer = styled.div`
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

const Hompage = () => {
  return (
    <Layout>
      <HompageContainer>
        <ContentContainer>
          <SlideImage />
          {/* <Post />
          <Post />
          <Post /> */}
          <Post
            author={{ name: "hmquandec", avatar: "path_to_avatar.jpg" }}
            time="2 ngày"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa deleniti vel neque! Saepe modi totam possimus? Quaerat, mollitia perferendis corporis iure delectus, ratione veniam, expedita corrupti aliquid veritatis sed?"
            image={testimg}
            likes={12}
            comments={[]}
            shares={2}
          />

          <Post
            author={{ name: "hmquandec", avatar: "path_to_avatar.jpg" }}
            time="2 ngày"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa deleniti vel neque! Saepe modi totam possimus? Quaerat, mollitia perferendis corporis iure delectus, ratione veniam, expedita corrupti aliquid veritatis sed?"
            image={testimg}
            likes={12}
            comments={[]}
            shares={2}
          />
        </ContentContainer>
      </HompageContainer>
    </Layout>
  );
};

export default Hompage;
