import React from "react";
import { data } from "../assets/data";

// function MapCard(props) {
//   console.log(
//     props.id,
//     props.image,
//     props.title,
//     props.propcheck,
//     "thjis is testinfg"
//   );
function MapCard({ id, title, image, propcheck = false }) {
  console.log(id, title, image, propcheck, "thjis is testinfg");
  return (
    <div
      style={{
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <div>
        <img src={image} alt="ai_image" width={200} height={200} />
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h1>{title}</h1>
        <p>Testing Paragraph</p>
      </div>
    </div>
  );
}

export default MapCard;
