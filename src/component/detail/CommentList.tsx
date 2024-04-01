"use client";
import { CommentType } from "@/component/detail/Comment";
import PostMenu from "@/ui/PostMenu";
import styled from "styled-components";
import { Dispatch, SetStateAction, useState } from "react";

type CommentListProps = {
  commentList: CommentType[] | null;
  userPid: number | null;
  deleteHandler: (commentid: number) => void;
  editCommentHandler: (commentid: number, comment: string) => void;
};

const EditForm = styled.form`
  display: flex;
  width: 100%;
  & > .edit_btn {
    background-color: #7d898b;
  }
  & > .cancle_btn {
    background-color: #da6b6b;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const EditInput = styled.input`
  width: 100%;
  padding: 0.7rem 0.5rem;
  border: 1px solid #cccccc;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const EditButton = styled.button`
  width: 100px;
  color: #fff;
`;

const CommentWrap = styled.div``;
const Box = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  & > .comment_box {
    width: 100%;
  }
`;
const Profile = styled.figure`
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
  border-radius: 50em;
  overflow: hidden;
`;
const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;
const NickName = styled.p`
  font-weight: 700;
  margin-right: 8px;
`;
const Date = styled.p`
  color: #aaa;
`;
const Desc = styled.div`
  padding-top: 5px;
`;

const EditCommentFrom = ({
  value,
  setEditBtn,
  commentId,
  editCommentHandler,
}: {
  value: string;
  setEditBtn: Dispatch<SetStateAction<number | null | undefined>>;
  commentId: number;
  editCommentHandler: (commentid: number, comment: string) => void;
}) => {
  const [comment, setComment] = useState<string>(value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editCommentHandler(commentId, comment);
    setEditBtn(null);
  };

  return (
    <EditForm onSubmit={handleSubmit}>
      <EditInput
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <EditButton type="submit" className="edit_btn">
        수정
      </EditButton>
      <EditButton onClick={() => setEditBtn(null)} className="cancle_btn">
        취소
      </EditButton>
    </EditForm>
  );
};

const CommentList = ({
  commentList,
  userPid,
  deleteHandler,
  editCommentHandler,
}: CommentListProps) => {
  const [editBtn, setEditBtn] = useState<number | null>();

  return (
    <CommentWrap>
      {commentList &&
        commentList.map((data, _) => {
          if (data.message) return;
          if (!data.profileImg)
            data.profileImg = "/media/icon/dummy_profile.png";
          return (
            <div key={data.id}>
              <Box>
                <Profile>
                  <img src={data.profileImg} alt="작성자 프로필" />
                </Profile>
                <div className="comment_box">
                  <WriterInfo>
                    <NickName>{data.nickName}</NickName>
                    <Date>{data.regiDate.slice(0, 10)}</Date>
                  </WriterInfo>

                  {editBtn === data.id ? (
                    <EditCommentFrom
                      value={data.comment}
                      commentId={data.id}
                      setEditBtn={setEditBtn}
                      editCommentHandler={editCommentHandler}
                    />
                  ) : (
                    <Desc>{data.comment}</Desc>
                  )}
                </div>
                {data.writerid === userPid ? (
                  <PostMenu
                    setEditBtn={setEditBtn}
                    deleteHandler={deleteHandler}
                    targetId={data.id}
                  />
                ) : (
                  ""
                )}
              </Box>
            </div>
          );
        })}
    </CommentWrap>
  );
};
export default CommentList;
