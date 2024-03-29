import { logout } from "@/recoil/atom/userState";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <ul>
        <li>프로필 이미지 수정</li>
        <li onClick={logout}>로그아웃</li>
      </ul>
    </div>
  );
};

export default NavMenu;
