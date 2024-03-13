import { logout } from "@/recoil/atom/userState";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <ul>
        <li>내 게시글 관리</li>
        <li>프로필 이미지 변경</li>
        <li onClick={logout}>로그아웃</li>
      </ul>
    </div>
  );
};

export default NavMenu;
