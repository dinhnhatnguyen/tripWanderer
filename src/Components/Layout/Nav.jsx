import React from "react";
import logo from "../Asset/Tripwanderer_Logo.png";
import userAvatar from "../Asset/image/IMG_4671 2.JPG";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faComment,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #fff;
  padding: 0;
  height: 65px;
`;

const NavbarBrand = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  max-height: 100%;
  padding: 10px 20px;
`;

const Logo = styled.a`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1bc;
  border-radius: 50px;
  padding: 0px 10px;
  width: 400px;
  height: 45px;

  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    border-left: #666 solid;
    padding-left: 20px;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;

  a {
    color: black;
    text-decoration: none;
    background-color: white;
    margin-left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 47.67px;
  }

  svg {
    stroke-width: 30;
  }
`;

const NavbarUser = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  .user-name {
    font-weight: bold;
    font-size: 16px;
    color: #666;
  }

  .user-role {
    font-size: 14px;
    color: #046cb8;
  }
`;

const Nav = () => {
  return (
    <NavbarContainer>
      <NavbarHeader>
        <NavbarBrand>
          <Logo href="/">
            <img src={logo} alt="TripWanderer Logo" />
          </Logo>
        </NavbarBrand>
        <NavbarSearch>
          <input type="text" placeholder="Search for stocks and more" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </NavbarSearch>
        <NavbarMenu>
          <a href="#">
            <FontAwesomeIcon icon={faEdit} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </NavbarMenu>
        <NavbarUser>
          <UserAvatar>
            <img src={userAvatar} alt="User Avatar" />
          </UserAvatar>
          <UserInfo>
            <div className="user-name">Nguyễn Đình Nhật</div>
            <div className="user-role">Trip maker</div>
          </UserInfo>
        </NavbarUser>
      </NavbarHeader>
    </NavbarContainer>
  );
};

export default Nav;
