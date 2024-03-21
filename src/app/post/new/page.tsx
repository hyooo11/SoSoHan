import Header from "@/component/Header";
import PostEditor from "@/component/post/PostEditor";

const PostNewPage = () => {
  return (
    <>
      <Header backBtn={true} />
      <div className="gloval-page">
        <PostEditor />
        {/* <BottomMenu /> */}
      </div>
      ;
    </>
  );
};

export default PostNewPage;
