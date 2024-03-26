export const getPostList = async (page: number) => {
  const response = await fetch(`/api/posts/list?page=${page}`);
  return response.json();
};

export const getPostLastPage = async () => {
  const response = await fetch("/api/posts/last-page");
  return response.json();
};

export const getPostDetail = async (postPid: string) => {
  const response = await fetch(`/api/posts/${postPid}`);
  return response.json();
};
