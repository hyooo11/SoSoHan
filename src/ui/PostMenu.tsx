"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

type Props = {
  targetId: number;
  setEditBtn: Dispatch<SetStateAction<number | null | undefined>>;
  deleteHandler: (commentid: number) => void;
};

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
  z-index: 1;
  width: 200px;
  top: 25px;
  right: 0;
  background-color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  & > p {
    padding: 7px 0;
    display: flex;
  }
  & > .edit_ {
    color: #7d898b;
  }
  & > .del_ {
    color: #da6b6b;
  }
  & > p .icon {
    padding-right: 5px;
  }
`;

const PostMenu = ({ targetId, setEditBtn, deleteHandler }: Props) => {
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
          <p
            onClick={() => {
              setEditBtn(targetId);
              setPostMenu(false);
            }}
            className="edit_"
          >
            <span className="icon">
              <FaEdit />
            </span>
            <span className="txt">수정하기</span>
          </p>
          <p
            onClick={() => {
              deleteHandler(targetId);
              setPostMenu(false);
            }}
            className="del_"
          >
            <span className="icon">
              <RiDeleteBinLine />
            </span>
            <span className="txt">삭제하기</span>
          </p>
        </MenuBox>
      ) : (
        ""
      )}
    </MenuWrap>
  );
};
export default PostMenu;
