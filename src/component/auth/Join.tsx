"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputFormTextLabel } from "@/ui/InputForm";
import { InputProfile } from "@/ui/InputFile";
import { PrimaryBtn } from "@/ui/Button";
import { ValidateForm } from "@/util/Validator";
import { useState } from "react";
import { useRouter } from "next/navigation";

type JoinInputType = {
  name: string;
  nickName: string;
  email: string;
  password: string;
  phone: string;
  profileImg?: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("이름은 필수값입니다.")
    .matches(ValidateForm.nameRegex, {
      message: "이름은 영어 대/소문자 또는 한글만 입력 가능합니다.",
    }),
  nickName: yup
    .string()
    .required("닉네임은 필수값입니다.")
    .matches(ValidateForm.nicknameRegex, {
      message:
        "영어 대/소문자, 숫자, 한글 자모음 조합 2~10자 이내로 작성해주세요.",
    })
    .test("uniqueNickName", "이미 사용중인 닉네임 입니다.", async (value) => {
      try {
        const response = await fetch(
          `/api/account/nickname_check?nickname=${value}`
        );
        const res = await response.json();
        return res.duplicate === false;
      } catch {
        return false;
      }
    }),
  email: yup
    .string()
    .required("이메일은 필수값입니다.")
    .matches(ValidateForm.emailRegex, {
      message: "이메일 형식에 맞게 작성해주세요 ex) example@example.com",
    })
    .test("uniqueEmail", "이미 사용중인 이메일 입니다.", async (value) => {
      try {
        const response = await fetch(`/api/account/email_check?email=${value}`);
        const res = await response.json();
        return res.duplicate === false;
      } catch {
        return false;
      }
    }),
  password: yup
    .string()
    .required("비밀번호는 필수값입니다.")
    .matches(ValidateForm.pwRegex, {
      message:
        "비밀번호 영소문자, 숫자, 특수문자(@#$%^&+=!)가 포함되어야 하며 최소 8자 이상 입력하세요.",
    }),
  phone: yup.string().required("휴대폰번호는 필수값입니다."),
  // .matches(ValidateForm.phoneRegex, {
  //   message: "휴대폰 번호 형식에 맞게 입력해주세요.",
  // }),
});

const Join = () => {
  const [profileData, setProfileDate] = useState<File | null>();
  const [profilePreview, setProfilePreview] = useState<string | null>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinInputType>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //프로필 이미지 등록
  const addFilesData = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgFile = e.target.files[0];
      const photoURL = URL.createObjectURL(imgFile);
      if (imgFile) {
        setProfileDate(imgFile);
        setProfilePreview(photoURL);
      }
    }
  };

  const onSubmit: SubmitHandler<JoinInputType> = async (data) => {
    const formData = new FormData();
    if (profileData) {
      formData.append("profileImg", profileData);
    }
    formData.append("name", data.name);
    formData.append("nickName", data.nickName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);

    await fetch("/api/account/join", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        router.push("/");
        router.replace("/");
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="gloval-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputProfile
          priview={profilePreview}
          label={"이미지 업로드"}
          onChange={addFilesData}
        />
        <InputFormTextLabel
          label={"이름"}
          type={"text"}
          name={"name"}
          register={register}
          placeholder={"이름을 입력해주세요"}
          errorMessage={errors.name?.message}
        />
        <InputFormTextLabel
          label={"닉네임"}
          type={"text"}
          name={"nickName"}
          register={register}
          placeholder={"닉네임을 입력해주세요"}
          errorMessage={errors.nickName?.message}
        />
        <InputFormTextLabel
          label={"이메일"}
          type={"email"}
          name={"email"}
          register={register}
          placeholder={"이메일을 입력해주세요"}
          errorMessage={errors.email?.message}
        />
        <InputFormTextLabel
          label={"비밀번호"}
          type={"password"}
          name={"password"}
          register={register}
          placeholder={"비밀번호를 입력해주세요"}
          errorMessage={errors.password?.message}
        />
        <InputFormTextLabel
          label={"휴대폰 번호"}
          type={"tel"}
          name={"phone"}
          register={register}
          placeholder={"휴대폰 번호를 입력해주세요"}
          errorMessage={errors.phone?.message}
        />
        <PrimaryBtn text={"회원가입"} />
      </form>
    </div>
  );
};
export default Join;
