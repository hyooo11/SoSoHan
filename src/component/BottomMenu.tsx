import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";

const BottomMenu = () => {
  return (
    <div className="BottomMenu">
      <ul>
        <li>
          <Link href="/">
            <IoHome />
            <span>홈</span>
          </Link>
        </li>
        <li>
          <FaSearch />
          <span>검색</span>
        </li>
        <li>
          <FaEdit />
          <span>게시글 작성</span>
        </li>
        <li>
          <FaUserLarge />
          <span>내 프로필</span>
        </li>
        <li>
          <PiSignOutBold />
          <span>로그아웃</span>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
