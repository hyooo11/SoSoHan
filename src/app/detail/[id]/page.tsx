import PostDetail from "@/component/detail/PostDetail";
import Header from "@/component/Header";

const postDetailPage = ({ params }: { params: { id: string } }) => {
  const postPid = params.id;
  return (
    <>
      <Header backBtn={true} />
      <div className="gloval-page">
        <PostDetail postPid={postPid} />
      </div>
    </>
  );
};

export default postDetailPage;
