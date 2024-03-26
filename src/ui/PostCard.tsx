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
                    <img src={data.profileImg} alt="프로필 이미지" />
                  </figure>
                  <div className={style.user_info}>
                    <span className={style.nickname}>{data.nickName}</span>
                    <span className={style.date}>
                      {data.regiDate.slice(0, 10)}
                    </span>
                  </div>
                </div>
                <div className={style.content}>
                  <div className={style.desc}>{data.content}</div>
                  <div className={style.hash_tag}>
                    {data.hashTag.map((data, index) => {
                      return <p key={index}># {data}</p>;
                    })}
                  </div>
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
