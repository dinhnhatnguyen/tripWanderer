import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userAvatar from "../Asset/image/IMG_4671 2.JPG";
import {
  faHome,
  faUsers,
  faQuestionCircle,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";

const SidebarContainer = styled.div`
  width: 260px;
  background-color: #ffff;
  min-height: 100vh;
  padding: 20px 20px;
  box-sizing: border-box;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #333;
  text-decoration: none;
  margin-bottom: 5px;

  &.active {
    background-color: #046cb8;
    color: white;
    border-radius: 5px;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  width: 20px;
  text-align: center;
`;

const FollowingList = styled.div`
  margin-top: 20px;
`;

const FollowingItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const FollowingImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #6c757d;
`;

const FooterLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
`;

const Section = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const FollowingHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const LeftSildeBar = () => {
  return (
    <SidebarContainer>
      <Section>
        <MenuItem href="/" className="active">
          <MenuIcon icon={faHome} /> Trang chủ
        </MenuItem>
        <MenuItem href="/discovery">
          <MenuIcon icon={faCompass} /> Khám phá
        </MenuItem>
        <MenuItem href="">
          <MenuIcon icon={faWallet} /> Dịch vụ
        </MenuItem>
        <MenuItem href="/">
          <MenuIcon icon={faUsers} /> Đang theo dõi
        </MenuItem>
      </Section>

      <Section>
        <FollowingList>
          <FollowingHeader>Các tài khoản đang theo dõi</FollowingHeader>
          {[1, 2, 3, 4].map((_, index) => (
            <FollowingItem key={index}>
              <FollowingImage src={userAvatar} alt="Jonathan Doe" />
              <span>Jonathan Doe</span>
            </FollowingItem>
          ))}
        </FollowingList>
      </Section>

      <Section>
        <MenuItem href="#">
          <MenuIcon icon={faQuestionCircle} /> Hỗ trợ
        </MenuItem>
        <MenuItem href="#">
          <MenuIcon icon={faCircleExclamation} /> Báo lỗi/ góp ý
        </MenuItem>
      </Section>

      <Footer>
        <FooterLink href="#">Giới thiệu</FooterLink>
        <FooterLink href="#">Bản quyền</FooterLink>
        <FooterLink href="#">Liên hệ với chúng tôi</FooterLink>
        <FooterLink href="#">Quảng cáo</FooterLink>
        <p>Điều khoản • Quyền riêng tư • Chính sách bảo mật</p>
        <p>© 2024 TripWanderer - All Rights Reserved</p>
      </Footer>
    </SidebarContainer>
  );
};

export default LeftSildeBar;
