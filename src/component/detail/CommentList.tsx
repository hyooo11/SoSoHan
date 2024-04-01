"use client";
import { CommentType } from "@/component/detail/Comment";
import PostMenu from "@/ui/PostMenu";
import styled from "styled-components";

type CommentListProps = {
  commentList: CommentType[] | null;
};

const CommentWrap = styled.div``;
const Box = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
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
`;
const Date = styled.p`
  color: #aaa;
`;
const Desc = styled.div`
  padding-top: 5px;
`;
const CommentList = ({ commentList }: CommentListProps) => {
  console.log(commentList);

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
                <div>
                  <WriterInfo>
                    <NickName>{data.nickName}</NickName>
                    <Date>{data.regiDate.slice(0, 10)}</Date>
                  </WriterInfo>
                  <Desc>{data.comment}</Desc>
                </div>
                <PostMenu />
              </Box>
            </div>
          );
        })}
    </CommentWrap>
  );
};
export default CommentList;
