import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "../../../Atoms/ImageUpload/ImageUpload";
import ImagePost from "./ImagePost";

const ImagePoll = () => {
  const [files, setFIles] = useState([]);
  const changeHandler = (e) => {
    setFIles([...e.target.files]);
  };
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  return (
    <>
      <StyledGridBox
        className={`grid gap-x-2 gap-y-4 ${
          files.length === 0 ? "" : "mb-m"
        } rounded-md relative`}
      >
        {files.map((file, index) => {
          const letter = letters[index];
          return <ImagePost key={index} alpha={letter} file={file} />;
        })}
      </StyledGridBox>
      <ImageUpload changed={changeHandler} />
    </>
  );
};

const StyledGridBox = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export default ImagePoll;
