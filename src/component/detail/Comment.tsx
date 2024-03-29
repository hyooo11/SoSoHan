"use client";
import { useEffect, useState } from "react";
import { getCommentList, postComment } from "@/api/commentAPI";
import CommentList from "@/component/detail/CommentList";
import CommentForm from "@/component/detail/CommentForm";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";

type PostPidProps = { postPid: number };

export interface CommentType {
  id: number;
  postid: number;
  comment: string;
  writerid: number;
  regiDate: string;
  nickName: string;
  profileImg: string;
}

const Comment = ({ postPid }: PostPidProps) => {
  const [commentList, setCommentList] = useState<CommentType[] | null>([]);
  const userStates = useRecoilValue(userState);
  //댓글 리스트 함수
  const getComment = () => {
    getCommentList(postPid)
      .then((response) => setCommentList(response))
      .catch((err) => console.log(err));
  };
  //댓글 초기 리스트
  useEffect(() => {
    getComment();
  }, []);

  // 새 댓글등록
  const newCommentHandler = (comment: string) => {
    const data = {
      userid: userStates.pid,
      comment: comment,
    };
    postComment("POST", data, postPid)
      .then((response) => getComment())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <CommentList commentList={commentList} />
      <CommentForm newCommentHandler={newCommentHandler} />
    </div>
  );
};

export default Comment;
