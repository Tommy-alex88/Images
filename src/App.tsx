import { Fragment, useEffect, useState } from "react";
import axios from "./axios";

import { ImageType } from "./dataTypes/types";
import ImageContainer from "./components/UI/ImageContainer/ImageContainer";
import "./App.css";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const [images, setImages] = useState<ImageType[]>();
  const [show, setShow] = useState<boolean>(false);
  const [imageId, setImageId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("/images").then((res) => {
      const fetchedImages = [];
      for (let key in res.data) {
        fetchedImages.push({
          ...res.data[key],
          id: res.data[key].id,
        });
      }
      setImages(fetchedImages);
      setLoading(false);
    });
  }, []);

  const imageClickHandler = (id: string) => {
    setImageId(id);
    setShow(true);
  };

  const backdropClickHandler = () => {
    setShow((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="app">
      <header>
        <h1>TEST APP</h1>
      </header>
      <main>
        {show && (
          <Modal show={show} imageId={imageId} clicked={backdropClickHandler} />
        )}
        {images && !loading && (
          <ImageContainer imageClicked={imageClickHandler} images={images} />
        )}
      </main>
      <footer>
        <p>&#169;2018-2019</p>
      </footer>
    </div>
  );
}

export default App;
