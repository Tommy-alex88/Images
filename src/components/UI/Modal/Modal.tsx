import React, { Fragment, useEffect, useState } from "react";

import axios from "../../../axios";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Backdrop from "../Backdrop/Backdrop";
import Comment from "../Comment/Comment";
import Spinner from "../Spinner/Spinner";
import classes from "./Modal.module.css";
import { CommentType } from "../../../dataTypes/types";

type Props = {
  show: boolean;
  clicked: () => void;
  imageId: string;
};

const Modal: React.FC<Props> = (props) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>([]);
  //const [updated, setUpdated] = useState<boolean>(false);

  useEffect(() => {
    if (props.imageId) {
      axios.get(`images/${props.imageId}`).then((res) => {
        const bigImageUrl: string = res.data.url;
        const cmnts: CommentType[] = res.data.comments;
        setImageUrl(bigImageUrl);
        if (cmnts) {
          setComments(cmnts);
        }
      });
    }
  }, []);

  const addCommentHandler = (data: CommentType) => {
    setComments((prevState) => {
      return [...prevState, data];
    });
    // axios.post(`images/${props.imageId}/comments`, data); // useless post request, comments are not saved
    //setUpdated((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.clicked} />
      <div className={classes.modal}>
        <div className={classes.close} onClick={props.clicked}>
          &times;
        </div>
        <div className={classes["modal__image-container"]}>
          {imageUrl ? (
            <img src={imageUrl} className={classes["modal__image"]} />
          ) : (
            <Spinner />
          )}
        </div>
        <div className={classes["modal__comments-container"]}>
          {comments.length !== 0 &&
            comments.map((c) =>
              c.name ? (
                <Comment key={c.id} date={c.date} name={c.name} text={c.text} />
              ) : (
                <Comment key={c.id} date={c.date} name="Alex" text={c.text} />
              )
            )}
        </div>
        <AddCommentForm passData={addCommentHandler} />
      </div>
    </Fragment>
  );
};
export default Modal;
