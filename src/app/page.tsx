import PostList from "@/component/home/PostList";
import BottomMenu from "@/component/BottomMenu";
import Header from "@/component/Header";

export default function Home() {
  return (
    <>
      <Header backBtn={false} />
      <div className="gloval-page">
        <PostList />
        <BottomMenu />
      </div>
    </>
  );
}
