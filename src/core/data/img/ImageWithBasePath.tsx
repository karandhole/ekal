// 
import React from "react";
import { img_path } from "../../../environment";

interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  id?: string;
  style?: React.CSSProperties;
}

const ImageWithBasePath = (props: ImageProps) => {
  // ✅ If src is already a full URL, don't prepend img_path
  const fullSrc = props.src.startsWith("http")
    ? props.src
    : `${img_path}${props.src}`;

  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
      style={props.style}
    />
  );
};

export default ImageWithBasePath;