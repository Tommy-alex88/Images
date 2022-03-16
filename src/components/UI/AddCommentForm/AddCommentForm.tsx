import React, { FormEvent, useRef } from "react";

import { CommentType } from "../../../dataTypes/types";
import classes from "./AddCommentForm.module.css";

type Props = {
  passData: (data: CommentType) => void;
};

const AddCommentForm: React.FC<Props> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const text = commentRef.current?.value;
    if (name && text) {
      const data: CommentType = {
        date: Date.now(),
        id: Date.now(),
        name: name,
        text: text,
      };
      props.passData(data);
      nameRef.current.value = "";
      commentRef.current.value = "";
    }
  };

  return (
    <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
      <input type="text" ref={nameRef} placeholder="Ваше имя" required />
      <input type="text" ref={commentRef} placeholder="Ваш комментарий" />
      <button type="submit">Оставить комментарий</button>
    </form>
  );
};

export default AddCommentForm;
