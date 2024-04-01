import PostDetail from "@/component/detail/PostDetail";
import Comment from "@/component/detail/Comment";
import Header from "@/component/Header";

const postDetailPage = ({ params }: { params: { id: number } }) => {
  const postPid = params.id;
  return (
    <>
      <Header logoBtn={true} backBtn={true} toggleBtn={true} />
      <div className="gloval-page">
        <PostDetail postPid={postPid} />
        <Comment postPid={postPid} />
      </div>
    </>
  );
};

export default postDetailPage;
