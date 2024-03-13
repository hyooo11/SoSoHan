"use client";

import NavMenu from "@/component/NavMenu";
import PostSearch from "@/component/PostSearch";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  const [searchToggle, setSearchToggle] = useState(false);
  const [navToggle, setnNavToggle] = useState(false);

  if (pathname.includes("/auth/login")) return null;
  return (
    <>
      <div className="Header">
        <h1 className="logo">SOSOHAN</h1>
        <div className="nav_btn_area">
          <p
            onClick={() => {
              setSearchToggle(!searchToggle);
            }}
            className="search_btn"
          >
            <IoSearch />
          </p>
          <p
            onClick={() => {
              setnNavToggle(!navToggle);
            }}
            className="nav_btn"
          >
            {navToggle ? <IoClose /> : <RxHamburgerMenu />}
          </p>
        </div>
      </div>
      {searchToggle ? <PostSearch /> : ""}
      {navToggle ? <NavMenu /> : ""}
    </>
  );
};

export default Header;
