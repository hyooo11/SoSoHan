import { logout } from "@/recoil/atom/userState";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <ul>
        <li onClick={logout}>로그아웃</li>
      </ul>
    </div>
  );
};

export default NavMenu;
