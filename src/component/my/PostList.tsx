"use client";
import { getMyPostList } from "@/api/postAPI";
import { useEffect, useState } from "react";
import { userState, UserStateType } from "@/recoil/atom/userState";
import { PostType } from "@/component/home/PostList";

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
    <div>
      {myPostList &&
        myPostList.map((data, _) => {
          return <div>{data.title}</div>;
        })}
    </div>
  );
};
export default PostList;
