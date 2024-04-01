"use client";

import { IoHome } from "react-icons/io5";
import { logout } from "@/recoil/atom/userState";
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
          <Link href="/post/new">
            <FaEdit />
            <span>게시글 작성</span>
          </Link>
        </li>
        <li>
          <Link href="/my/profile">
            <FaUserLarge />
            <span>내 프로필</span>
          </Link>
        </li>
        <li onClick={logout}>
          <PiSignOutBold />
          <span>로그아웃</span>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
