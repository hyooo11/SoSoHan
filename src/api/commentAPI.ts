type postCommentType = {
  userid: number | null;
  comment: string;
};

export const getCommentList = async (postid: number) => {
  const response = await fetch(`/api/posts/${postid}/comments/list`);
  return response.json();
};

export const postComment = async (
  method: string,
  dataInfo: postCommentType,
  postid: number
) => {
  const response = await fetch(`/api/posts/${postid}/comments`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataInfo),
  });
  return response.json();
};
