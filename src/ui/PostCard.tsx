"use client";

import style from "./PostCard.module.css";
import PostListSwiper from "@/ui/Swiper";
import { PostType } from "@/component/home/PostList";
import { useEffect } from "react";
import Link from "next/link";
interface PostProps {
  postList: PostType[] | null;
}

const PostCard = ({ postList }: PostProps) => {
  useEffect(() => {
    postList && console.log(postList);
  }, []);
  return (
    <>
      {postList &&
        postList.map((data, index) => {
          return (
            <Link
              href={`/detail/${data.id}`}
              as={`/detail/${data.id}`}
              key={data.id}
            >
              <div className={style.PostCard}>
                <div className={style.user_profile}>
                  <figure>
                    <img
                      src="/media/icon/dummy_profile.png"
                      alt="프로필 이미지"
                    />
                  </figure>
                  <div>
                    <span>닉네임</span>
                    <span>{data.regiDate.slice(0, 10)}</span>
                  </div>
                </div>
                <div className={style.content}>
                  <div>{data.content}</div>
                  <PostListSwiper images={data.images} />
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default PostCard;
