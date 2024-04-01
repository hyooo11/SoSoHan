"use client";
import { getMyPostList } from "@/api/postAPI";
import { useEffect, useState } from "react";
import { UserStateType } from "@/recoil/atom/userState";
import { PostType } from "@/component/home/PostList";
import Link from "next/link";
import styled from "styled-components";

type Props = { userInfo: UserStateType };

const PostListWrap = styled.div`
  & > h2 {
    font-weight: 700;
    color: #333;
    padding: 1rem 0;
  }
  & > .no_data {
    font-weight: 700;
    color: #c8c8c8;
  }
`;

const PostList = ({ userInfo }: Props) => {
  const [myPostList, setMyPostList] = useState<PostType[]>();
  useEffect(() => {
    if (userInfo.pid) {
      getMyPostList(userInfo.pid)
        .then((response) => setMyPostList(response.data))
        .catch((err) => console.log(err));
    }
  }, [userInfo]);
  return (
    <PostListWrap>
      <h2>내 게시글</h2>
      {myPostList?.length === 0 ? (
        <div className="no_data">등록된 게시물이 없습니다.</div>
      ) : (
        <div className="grid grid-cols-2 gap-1">
          {myPostList &&
            myPostList.map((data, _) => {
              return (
                <Link key={data.id} href={`/detail/${data.id}`}>
                  <p>
                    <img
                      src={data.images[0]}
                      alt="대표이미지"
                      className="rounded"
                    />
                  </p>
                </Link>
              );
            })}
        </div>
      )}
    </PostListWrap>
  );
};
export default PostList;
