import React, { ReactNode } from "react";
import classes from "./Backdrop.module.css";

type Props = {
  show: boolean;
  clicked: () => void;
};

const Backdrop: React.FC<Props> = (props) => {
  return props.show ? (
    <div className={classes.backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
