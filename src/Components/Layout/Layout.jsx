import React from "react";
import styled from "styled-components";
import LeftSildeBar from "./LeftSildeBar";
import RightSlidebar from "./RightSlideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  max-width: 1280px;
  overflow: hidden;
`;

const Content = styled.div`
  overflow-y: auto;
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
