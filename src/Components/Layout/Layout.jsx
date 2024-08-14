import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import LeftSildeBar from "./LeftSildeBar";
import RightSlidebar from "./RightSlideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const LayoutContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   min-width: 100vh;
//   background-color: #f9f9f9;
// `;

// const Content = styled.div`
//   display: flex;
//   flex: 1;
//   overflow: hidden;
//   justify-content: center;
// `;

// const MainContent = styled.main`
//   flex: 1;
//   overflow-y: auto;
//   padding: 20px;
//   background-color: #f9f9f9;
//   max-height: 100%;
//   min-height: 100vh;
//   // max-width: 900px;
//   width: 100%;
// `;

// const Layout = ({ children }) => {
//   return (
//     <LayoutContainer>
//       {/* <Nav /> */}
//       <Content>
//         <LeftSildeBar />
//         <MainContent>{children}</MainContent>
//         <RightSlidebar />
//       </Content>
//     </LayoutContainer>
//   );
// };

// export default Layout;

// const Content = styled.div`
//   display: flex;
//   flex: 1;
//   overflow: hidden;
//   justify-content: center;
// `;

// const MainContent = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow-y: scroll;
//   padding: 20px;
//   background-color: #f9f9f9;
//   max-height: 100%;
//   min-height: 100vh;
//   width: 100%;
// `;

// const PostContainer = styled.div`
//   width: 100%;
//   max-width: 800px; /* Giới hạn độ rộng của các bài post */
//   margin-bottom: 20px; /* Khoảng cách giữa các bài post */
// `;

// const Layout = ({ children }) => {
//   return (
//     <LayoutContainer>
//       <Content>
//         <LeftSildeBar />
//         <MainContent>
//           <PostContainer>{children}</PostContainer>
//         </MainContent>
//         <RightSlidebar />
//       </Content>
//     </LayoutContainer>
//   );
// };

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #dddd;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Content>
        <LeftSildeBar />
        <MainContent>{children}</MainContent>
        <RightSlidebar />
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
