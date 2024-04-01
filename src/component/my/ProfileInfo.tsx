"use client";
import { UserStateType } from "@/recoil/atom/userState";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaImages } from "react-icons/fa";

type Props = { userInfo: UserStateType };

const PorfileInfoBox = styled.div`
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #c8c8c8;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .img_box {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50rem;
    overflow: hidden;
    box-shadow: 4px 5px 6px rgba(0, 0, 0, 0.1);
  }
  & > .img_box img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > a {
    background-color: #7d898b;
    color: #fff;
    margin-top: 10px;
    padding: 0.5rem 2rem;
    border-radius: 50em;
    display: flex;
    align-items: center;
  }
  & > a .icon {
    margin-right: 5px;
  }
`;

const ProfileInfo = ({ userInfo }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && userInfo && (
        <PorfileInfoBox>
          <InfoWrap>
            <div className="img_box">
              <img src={userInfo.profileImg} alt="프로필 이미지" />
            </div>
            <Link href="/my/profile/edit">
              <span className="icon">
                <FaImages />
              </span>
              <span>프로필 이미지 수정</span>
            </Link>
          </InfoWrap>
        </PorfileInfoBox>
      )}
    </>
  );
};

export default ProfileInfo;
