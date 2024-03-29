"use client";
import { useEffect, useState } from "react";
import { getCommentList } from "@/api/commentAPI";

type PostPidProps = { postPid: number };

type CommentType = {
  id: number;
  postid: number;
  comment: string;
  writerid: number;
  regiDate: string;
  nickName: string;
  profileImg: string;
};

const Comment = ({ postPid }: PostPidProps) => {
  console.log(postPid);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<CommentType[] | null>([]);
  console.log(commentList);
  useEffect(() => {
    getCommentList(postPid)
      .then((response) => setCommentList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {commentList &&
        commentList.map((data, _) => {
          return (
            <div>
              <div>{data.comment}</div>
            </div>
          );
        })}
      <form>
        <input
          type="text"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Comment;
