"use client";
import { getPostDetail } from "@/api/postAPI";
import { useEffect, useState } from "react";

type PostPidProps = { postPid: string };

interface PostType {
  id: number;
  title: string;
  content: string;
  regiDate: string;
  updateDate: string;
  writerId: number;
  profileImg: string;
  images: string[];
  hashTag: string[];
}
const PostDetail = ({ postPid }: PostPidProps) => {
  const [postDetail, setPostDetail] = useState<PostType | null | undefined>();
  useEffect(() => {
    getPostDetail(postPid)
      .then((response) => {
        setPostDetail(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(postDetail);
  return (
    <>
      {postDetail && (
        <div>
          <div>
            <div>
              {postDetail.hashTag.map((data, index) => {
                return <span key={index}>{data}</span>;
              })}
            </div>
            <p>{postDetail.title}</p>
            <div>
              <p>
                <img src={postDetail.profileImg} alt="작성자 프로필 이미지" />
              </p>
              <span>닉네임</span>
              <span>{postDetail.regiDate.slice(0, 10)}</span>
            </div>
          </div>
          <div>{postDetail.content}</div>
          <div>사진 슬라이더</div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
