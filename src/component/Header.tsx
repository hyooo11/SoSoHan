"use client";

import NavMenu from "@/component/NavMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

const Header = ({ backBtn }: { backBtn: boolean }) => {
  const router = useRouter();
  const [navToggle, setnNavToggle] = useState(false);

  return (
    <>
      <div className="Header">
        <h1 className="logo">SOSOHAN</h1>
        {backBtn ? (
          <button onClick={() => router.back()}>
            <IoChevronBack />
          </button>
        ) : (
          <span></span>
        )}

        <div className="nav_btn_area">
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
      {navToggle ? <NavMenu /> : ""}
    </>
  );
};

export default Header;
