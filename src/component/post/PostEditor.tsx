"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { InputFormTextLabel } from "@/ui/InputForm";
import { InputPostImage } from "@/ui/InputFile";
import { useState, useEffect } from "react";
import { PrimaryBtn } from "@/ui/Button";
import { userState } from "@/recoil/atom/userState";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { PostType } from "@/types/postType";

type EditorInputType = {
  title: string;
  content: string;
  hashTag: string;
  images: string[];
};

const PostEditor = ({
  isEdit,
  originData,
  postPid,
}: {
  isEdit: boolean;
  originData?: PostType | null | undefined;
  postPid?: number;
}) => {
  const [imageData, setImageData] = useState<File[] | null>();
  const [imagePriview, setImagePriview] = useState<string[] | null>();
  const userStates = useRecoilValue(userState);
  const router = useRouter();

  console.log(postPid);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EditorInputType>({ mode: "onChange" });

  //게시물 이미지 등록 및 미리보기
  const addFilesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const photoData = [];
    const photoURL = [];
    const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB
    if (e.target.files !== null) {
      const imgFile = Array.from(e.target.files);
      for (let i = 0; i < imgFile.length; i++) {
        const imgList = imgFile[i];
        if (imgList.type.startsWith("image/")) {
          if (imgFile.length > 5) {
            alert("이미지는 최대 10개까지 등록 가능합니다.");
            break;
          }
          if (imgList.size >= FILE_SIZE_MAX_LIMIT) {
            alert("이미지 파일의 최대용랑은 개당 5mb입니다.");
            break;
          }
          photoData.push(imgList);
          photoURL.push(URL.createObjectURL(imgList));
        }
      }
      setImageData(photoData);
      setImagePriview(photoURL);
    }
  };

  //수정 페이지 기존 데이터
  useEffect(() => {
    if (originData && isEdit === true) {
      setValue("title", originData.title);
      setValue("content", originData.content);
      setImagePriview(originData.images);
    }
  }, [originData]);

  const onSubmit: SubmitHandler<EditorInputType> = async (data, e) => {
    console.log(data);
    e?.preventDefault();
    const formData = new FormData();
    formData.append("userpid", JSON.stringify(userStates.pid));
    formData.append("title", data.title);
    formData.append("content", data.content);
    imageData?.forEach((imageData) => formData.append("images", imageData));

    if (isEdit === true) {
      await fetch(`/api/posts/${postPid}`, {
        method: "PUT",
        body: formData,
      })
        .then((response) => {
          alert("게시물이 성공적으로 수정되었습니다.");
          router.push("/");
          router.replace("/");
          return response.json();
        })
        .catch((error) => {
          alert("게시글 등록오류. 다시 시도해주세요.");
          console.log(error);
        });
    } else if (isEdit === false) {
      await fetch("/api/posts", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          alert("게시물이 성공적으로 등록되었습니다.");
          router.push("/");
          router.replace("/");
          return response.json();
        })
        .catch((error) => {
          alert("게시글 등록오류. 다시 시도해주세요.");
          console.log(error);
        });
    }
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
          label={"이미지 선택"}
          onChange={addFilesData}
        />
        <PrimaryBtn text={"발행"} />
      </form>
    </div>
  );
};
export default PostEditor;
