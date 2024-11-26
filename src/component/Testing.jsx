import React, { useState } from "react";

const Testing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Get the bounding rectangle of the element
    // It gives us the position and size of the element relative to the viewport
    const rect = e.target.getBoundingClientRect();
    console.log(rect, e.clientX, e.clientY, "this is event");
    // Get the current mouse position relative to the viewport
    const x = e.clientX;
    const y = e.clientY;

    // Calculate the mouse position relative to the element
    // by subtracting the left and top position of the element
    const mouseX = x - rect.left;
    const mouseY = y - rect.top;

    // Update the state with the new mouse position
    setMousePosition({ x: mouseX, y: mouseY });
  };

  return (
    <div className="App">
      <div className="image-container" onMouseMove={handleMouseMove}>
        {/* Grayscale background image */}
        <img
          src="https://images.pexels.com/photos/2950331/pexels-photo-2950331.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="example"
          className="grayscale"
        />

        {/* Saturated hover area */}
        <div
          className="hover-mask"
          style={{
            clipPath: `circle(100px at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Testing;
