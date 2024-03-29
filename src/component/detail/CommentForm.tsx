"use client";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  newCommentHandler: (comment: string) => void;
};

const Form = styled.form`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.5rem;
  border: 1px solid #cccccc;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const Button = styled.button`
  width: 100px;
  background-color: #7d898b;
  color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CommentForm = ({ newCommentHandler }: Props) => {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newCommentHandler(comment);
    setComment("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button type="submit">등록</Button>
      </Form>
    </div>
  );
};

export default CommentForm;
