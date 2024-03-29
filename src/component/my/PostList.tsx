"use client";
import { getMyPostList } from "@/api/postAPI";
import { useEffect, useState } from "react";
import { UserStateType } from "@/recoil/atom/userState";
import { PostType } from "@/component/home/PostList";
import Link from "next/link";

type Props = { userInfo: UserStateType };

const PostList = ({ userInfo }: Props) => {
  const [myPostList, setMyPostList] = useState<PostType[]>();
  useEffect(() => {
    if (userInfo.pid) {
      getMyPostList(userInfo.pid)
        .then((response) => setMyPostList(response.data))
        .catch((err) => console.log(err));
      console.log(myPostList);
    }
  }, [userInfo]);
  return (
    <>
      <h2>내 게시글 모아보기</h2>
      <div className="grid grid-cols-3 gap-1">
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
    </>
  );
};
export default PostList;
