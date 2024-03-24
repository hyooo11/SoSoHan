"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputFormTextLabel } from "@/ui/InputForm";
import { InputPostImage } from "@/ui/InputFile";
import HashTag from "@/ui/HashTag";
import { useState } from "react";
import { PrimaryBtn } from "@/ui/Button";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";

type EditorInputType = {
  title: string;
  content: string;
  hashTag: string;
  images: string[];
  hashList: readonly string[];
};

const PostEditor = () => {
  const [imageData, setImageData] = useState<File[] | null>();
  const [imagePriview, setImagePriview] = useState<string[] | null>();

  const userStates = useRecoilValue(userState);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EditorInputType>({ mode: "onChange" });

  //게시물 이미지 등록 및 미리보기
  const addFilesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgFile = Array.from(e.target.files);
      const imageList = imgFile.map((data, _) => {
        const photoURL = URL.createObjectURL(data);
        return photoURL;
      });

      setImageData(imgFile);
      setImagePriview(imageList);
    }
  };
  //해시태그
  const hashList: readonly string[] = watch("hashList", []);

  const onSubmit: SubmitHandler<EditorInputType> = async (data) => {
    const formData = new FormData();
    formData.append("userpid", JSON.stringify(userStates.pid));
    formData.append("title", data.title);
    formData.append("content", data.content);
    imageData?.forEach((imageData) => formData.append("images", imageData));
    data.hashList?.forEach((hashList) => formData.append("hashList", hashList));

    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormTextLabel
          label={"제목"}
          type={"text"}
          name={"title"}
          register={register}
          placeholder={"제목을 입력해 주세요."}
          errorMessage={errors.title?.message}
        />
        <InputFormTextLabel
          label={"내용"}
          type={"text"}
          name={"content"}
          register={register}
          placeholder={"내용을 입력해 주세요."}
          errorMessage={errors.content?.message}
        />
        <InputPostImage
          priview={imagePriview}
          label={"이미지 등록"}
          onChange={addFilesData}
        />
        <HashTag
          hashList={hashList}
          name={"hashTag"}
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <PrimaryBtn text={"발행"} />
      </form>
    </div>
  );
};
export default PostEditor;
