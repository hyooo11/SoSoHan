"use client";
import { getPostDetail } from "@/api/postAPI";
import { useEffect, useState } from "react";
import style from "./PostDetail.module.css";
import PostListSwiper from "@/ui/Swiper";
import PostMenu from "@/ui/PostMenu";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";

type PostPidProps = { postPid: number };

interface PostType {
  id: number;
  title: string;
  content: string;
  regiDate: string;
  updateDate: string;
  writerId: number;
  nickName: string;
  profileImg: string;
  images: string[];
}
const PostDetail = ({ postPid }: PostPidProps) => {
  const [postDetail, setPostDetail] = useState<PostType | null | undefined>();
  const userStates = useRecoilValue(userState);
  console.log(userStates);
  console.log(postDetail);

  useEffect(() => {
    getPostDetail(postPid)
      .then((response) => {
        setPostDetail(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  if (postDetail && !postDetail.profileImg)
    postDetail.profileImg = "/media/icon/dummy_profile.png";
  return (
    <>
      {postDetail && (
        <div className={style.PostDetail}>
          <div className={style.title_box}>
            <p className={style.tit}>{postDetail.title}</p>
            <div className={style.writer_info}>
              <p className={style.profile}>
                <img src={postDetail.profileImg} alt="작성자 프로필 이미지" />
              </p>
              <div>
                <p className={style.nick_name}>{postDetail.nickName}</p>
                <p className={style.date}>{postDetail.regiDate.slice(0, 10)}</p>
              </div>
              {postDetail.writerId === userStates.pid ? <PostMenu /> : ""}
            </div>
          </div>
          <div className={style.desc}>{postDetail.content}</div>
          <div>
            <PostListSwiper images={postDetail.images} />
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
