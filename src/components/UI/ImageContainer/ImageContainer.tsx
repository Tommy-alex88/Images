import { ImageType } from "../../../dataTypes/types";
import classes from "./ImageContainer.module.css";

type Props = {
  images: ImageType[];
  imageClicked: (id: string) => void;
};

const ImageContainer: React.FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      {props.images.map((image: ImageType) => {
        return (
          <img
            onClick={() => props.imageClicked(image.id)}
            key={image.id}
            src={image.url}
          />
        );
      })}
    </div>
  );
};

export default ImageContainer;
