"use client";
import styled from "styled-components";
import PostListSwiper from "@/ui/Swiper";
import { PostType } from "@/component/home/PostList";
import Link from "next/link";

interface PostProps {
  postList: PostType[] | null;
}

const PostCardWrap = styled.div``;
const UserProfile = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  & > figure {
    position: relative;
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
    border-radius: 50rem;
    overflow: hidden;
  }
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > .user_info span {
    display: block;
  }
  & > .user_info .nickname {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  & > .user_info .date {
    color: #aaa;
    font-size: 0.9rem;
  }
`;

const ContentWrap = styled.div`
  & > .txt_box {
    padding: 1rem 0 2rem;
    border-bottom: 1px solid #c8c8c8;
    margin-bottom: 2rem;
  }
  & > .txt_box .title {
    font-size: 1.2rem;
    margin-bottom: 7px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-weight: 500;
  }
  & > .txt_box .desc {
    font-size: 1rem;
    line-height: 1.3;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const PostCard = ({ postList }: PostProps) => {
  return (
    <>
      {postList &&
        postList.map((data, index) => {
          if (!data.profileImg)
            data.profileImg = "/media/icon/dummy_profile.png";
          return (
            <Link
              href={`/detail/${data.id}`}
              as={`/detail/${data.id}`}
              key={data.id}
            >
              <PostCardWrap>
                <UserProfile>
                  <figure>
                    <img src={data.profileImg} alt="프로필 이미지" />
                  </figure>
                  <div className="user_info">
                    <span className="nickname">{data.nickName}</span>
                    <span className="date">{data.regiDate.slice(0, 10)}</span>
                  </div>
                </UserProfile>
                <ContentWrap>
                  <PostListSwiper images={data.images} />
                  <div className="txt_box">
                    <div className="title">{data.title}</div>
                    <div className="desc">{data.content}</div>
                  </div>
                </ContentWrap>
              </PostCardWrap>
            </Link>
          );
        })}
    </>
  );
};

export default PostCard;
