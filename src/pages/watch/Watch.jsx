import React from "react";
import "./watch.scss";
import { BiArrowBack } from "react-icons/bi";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <BiArrowBack />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://youtu.be/8JW6qzPCkE8"
      />
    </div>
  );
}
