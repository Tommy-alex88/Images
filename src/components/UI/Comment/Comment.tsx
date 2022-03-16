import React, { Fragment } from "react";

import classes from "./Comment.module.css";

type Props = {
  text: string;
  date: number;
  name?: string;
};

const Comment: React.FC<Props> = (props) => {
  const formatedDate = new Date(props.date).toLocaleDateString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className={classes.comments}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.date}>{formatedDate}</div>
      <p>{props.text}</p>
    </div>
  );
};

export default Comment;
