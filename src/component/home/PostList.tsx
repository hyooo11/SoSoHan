"use client";
import PostCard from "@/ui/PostCard";
import { getPostList } from "@/api/postAPI";
import { useEffect, useState } from "react";
import Link from "next/link";

export interface PostType {
  id: number;
  title: string;
  content: string;
  regiDate: string;
  updateDate: string;
  writerid: number;
  images: string[];
  hashTag: string[];
}

const PostList = () => {
  const [postList, setPostList] = useState<PostType[] | null>(null);
  useEffect(() => {
    getPostList().then((data) => setPostList(data.data));
  }, []);

  return <PostCard postList={postList} />;
};

export default PostList;
