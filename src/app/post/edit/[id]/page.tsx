"use client";
import { getPostDetail } from "@/api/postAPI";
import Header from "@/component/Header";
import PostEditor from "@/component/post/PostEditor";
import { useState, useEffect } from "react";
import { PostType } from "@/types/postType";

const PostEdiePage = ({ params }: { params: { id: number } }) => {
  const [originData, setOriginData] = useState<PostType | null | undefined>();
  const postPid = params.id;
  useEffect(() => {
    getPostDetail(postPid)
      .then((response) => {
        setOriginData(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header
        logoBtn={false}
        headTitle={"게시글 수정"}
        backBtn={true}
        toggleBtn={true}
      />
      <div className="gloval-page">
        <PostEditor isEdit={true} originData={originData} postPid={postPid} />
      </div>
    </>
  );
};

export default PostEdiePage;
