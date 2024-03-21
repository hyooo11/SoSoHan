"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputFormTextLabel } from "@/ui/InputForm";
import { InputPostImage } from "@/ui/InputFile";
import { useState } from "react";

type EditorInputType = {
  title: string;
  content: string;
};

const PostEditor = () => {
  const [imageData, setImageData] = useState<FileList | null>();
  const [imagePriview, setImagePriview] = useState<string[] | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditorInputType>({ mode: "onChange" });

  //게시물 이미지 등록 및 미리보기
  const addFilesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgData = e.target.files;
      const imgFile = Array.from(e.target.files);
      console.log(imgFile);

      const imageList = imgFile.map((data, _) => {
        const photoURL = URL.createObjectURL(data);
        return photoURL;
      });

      setImageData(imgData);
      setImagePriview(imageList);
    }
  };

  const onSubmit: SubmitHandler<EditorInputType> = async (data) => {
    console.log(data);
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
      </form>
    </div>
  );
};
export default PostEditor;
