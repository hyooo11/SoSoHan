import Header from "@/component/Header";
import PostEditor from "@/component/post/PostEditor";

const PostNewPage = () => {
  return (
    <>
      <Header
        logoBtn={false}
        headTitle={"게시글 작성"}
        backBtn={true}
        toggleBtn={true}
      />
      <div className="gloval-page">
        <PostEditor isEdit={false} />
        {/* <BottomMenu /> */}
      </div>
      ;
    </>
  );
};

export default PostNewPage;
