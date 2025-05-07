"use client";
import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>Pcik imge</p>}
          {pickImage && <Image src={pickImage} alt="select" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          aceept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick on image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
