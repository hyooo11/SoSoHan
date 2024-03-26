"use client";
import PostCard from "@/ui/PostCard";
import { getPostList, getPostLastPage } from "@/api/postAPI";
import { useEffect, useRef, useState } from "react";

export interface PostType {
  id: number;
  nickName: string;
  profileImg: string;
  title: string;
  content: string;
  regiDate: string;
  updateDate: string;
  writerid: number;
  images: string[];
  hashTag: string[];
}

const PostList = () => {
  const [postList, setPostList] = useState<PostType[]>();
  const [renderList, setRenderList] = useState<PostType[]>([]);
  const [lastPage, setLastPage] = useState();
  const page = useRef(1);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPostList(page.current).then((data) => setRenderList(data.data));
    getPostLastPage().then((data) => {
      setLastPage(data.lastPage);
    });
  }, []);

  const handleScroll = () => {
    if (elementRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = elementRef.current;

      if (
        lastPage &&
        page.current <= lastPage &&
        scrollTop + clientHeight >= scrollHeight - 10
      ) {
        page.current++;
        getPostList(page.current).then((data) => {
          setPostList(data.data.data);
          setRenderList((prevRenderList) => [...prevRenderList, ...data.data]);
        });
      }
    }
  };
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div
      ref={elementRef}
      className="gloval-page"
      // style={{ overflow: "auto", height: "100%", border: "1px solid black" }}
    >
      <PostCard postList={renderList} />
    </div>
  );
};

export default PostList;
