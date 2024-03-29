"use client";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

const MenuWrap = styled.div`
  margin-left: auto;
  position: relative;
`;
const ToggleBtn = styled.div`
  width: 20px;
  height: 20px;
  & > svg {
    width: 100%;
    height: 100%;
    color: #c8c8c8;
  }
`;

const MenuBox = styled.div`
  position: absolute;
  width: 200px;
  top: 1rem;
  right: 0;
  background-color: #fff;
`;

const PostMenu = () => {
  const [postMenu, setPostMenu] = useState(false);

  return (
    <MenuWrap>
      <ToggleBtn
        onClick={() => {
          setPostMenu(!postMenu);
        }}
      >
        <BiDotsVerticalRounded />
      </ToggleBtn>

      {postMenu ? (
        <MenuBox>
          <p>
            <FaEdit />
            수정하기
          </p>
          <p>
            <RiDeleteBinLine />
            삭제하기
          </p>
        </MenuBox>
      ) : (
        ""
      )}
    </MenuWrap>
  );
};
export default PostMenu;
