import { logout } from "@/recoil/atom/userState";
import styled from "styled-components";
import Link from "next/link";

const NavMenuWrap = styled.ul``;

const MenuItem = styled.li`
  padding: 10px 0;
  cursor: pointer;
`;

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <NavMenuWrap>
        <MenuItem>
          <Link href="/my/profile/edit">프로필 이미지 수정</Link>
        </MenuItem>
        <MenuItem onClick={logout}>로그아웃</MenuItem>
      </NavMenuWrap>
    </div>
  );
};

export default NavMenu;
