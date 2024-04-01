import { logout } from "@/recoil/atom/userState";
import styled from "styled-components";

const NavMenuWrap = styled.ul``;

const MenuItem = styled.li`
  padding: 10px 0;
  cursor: pointer;
`;

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <NavMenuWrap>
        <MenuItem>프로필 이미지 수정</MenuItem>
        <MenuItem onClick={logout}>로그아웃</MenuItem>
      </NavMenuWrap>
    </div>
  );
};

export default NavMenu;
