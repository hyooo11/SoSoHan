"use client";
import { getPostDetail } from "@/api/postAPI";
import { useEffect, useState } from "react";
import style from "./PostDetail.module.css";
import PostListSwiper from "@/ui/Swiper";
import PostMenu from "@/ui/PostMenu";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";
import { deletePostDetail } from "@/api/postAPI";
import { useRouter } from "next/navigation";
import { PostType } from "@/types/postType";

type PostPidProps = { postPid: number };

const PostDetail = ({ postPid }: PostPidProps) => {
  const [postDetail, setPostDetail] = useState<PostType | null | undefined>();
  const [editBtn, setEditBtn] = useState<number | null>();
  const userStates = useRecoilValue(userState);
  const router = useRouter();

  useEffect(() => {
    getPostDetail(postPid)
      .then((response) => {
        setPostDetail(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  //게시글 수정페이지로 이동
  useEffect(() => {
    if (editBtn !== undefined && editBtn !== null) {
      router.push(`/post/edit/${editBtn}`);
    }
  }, [editBtn]);

  //게시글 삭제
  const deleteHandler = async (postid: number) => {
    deletePostDetail(postid)
      .then((res) => {
        alert("게시물이 삭제 되었습니다.");
        router.push("/");
        router.replace("/");
      })
      .catch((err) => console.log(err));
  };

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
              {postDetail.writerId === userStates.pid ? (
                <PostMenu
                  targetId={postDetail.id}
                  setEditBtn={setEditBtn}
                  deleteHandler={deleteHandler}
                />
              ) : (
                ""
              )}
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
