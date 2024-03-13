export const getPostList = async () => {
  const response = await fetch(`/api/posts/list?page=1`);
  return response.json();
};

export const getPostDetail = async (postPid: string) => {
  const response = await fetch(`/api/posts/${postPid}`);
  return response.json();
};
