export const getCommentList = async (postid: number) => {
  const response = await fetch(`/api/posts/${postid}/comments/list`);
  return response.json();
};

export const postComment = async (postid: number) => {
  const response = await fetch(`/api/posts/${postid}/comments`, {
    method: "POST",
  });
  return response.json();
};
