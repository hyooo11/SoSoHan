import { HashTagProps } from "@/types/ui/Type";
import styled from "styled-components";

const HashWrap = styled.div`
  border: 1px solid #cccccc;
  background-color: #fff;
  padding: 0.7rem 0.5rem;
  border-radius: 5px;
`;

const HashBox = styled.span`
  background-color: #c8c8c8;
  border-radius: 5px;
  margin: 0 3px 3px 0;
  padding: 2px 5px;
  display: inline-block;
`;

const Label = styled.label`
  width: 100%;
  display: block;
`;

const Input = styled.input`
  min-width: 100px;
`;

const HashTag = ({
  hashList,
  name,
  register,
  watch,
  setValue,
}: HashTagProps) => {
  const addHashtag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = watch("hashTag");
    if (e.keyCode === 13 && inputValue.trim() !== "") {
      setValue("hashList", [...hashList, `#${inputValue}`]);
      setValue("hashTag", "");
    }
  };
  return (
    <HashWrap>
      <Label htmlFor={name}>
        {hashList.map((data, index) => {
          return <HashBox key={index}>{data}</HashBox>;
        })}
        <Input
          type="text"
          {...register(name)}
          id={name}
          onKeyDown={addHashtag}
          placeholder="# 해시태그를 입력해 주세요"
        />
      </Label>
    </HashWrap>
  );
};

export default HashTag;
