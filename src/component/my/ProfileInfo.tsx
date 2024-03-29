"use client";
import { userState, UserStateType } from "@/recoil/atom/userState";
import styled from "styled-components";
import { useEffect, useState } from "react";

type Props = { userInfo: UserStateType };

const PorfileInfoBox = styled.div``;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  & > .img_box {
    width: 5rem;
    height: 5rem;
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
  & > .my_info div {
    font-size: 2rem;
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
            <div className="my_info">
              <p>{userInfo.nickName}</p>
              <p>{userInfo.name}</p>
            </div>
          </InfoWrap>
        </PorfileInfoBox>
      )}
    </>
  );
};

export default ProfileInfo;
