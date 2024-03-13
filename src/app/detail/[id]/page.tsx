import PostDetail from "@/component/detail/PostDetail";

const postDetailPage = ({ params }: { params: { id: string } }) => {
  const postPid = params.id;
  return <PostDetail postPid={postPid} />;
};

export default postDetailPage;
