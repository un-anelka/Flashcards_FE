import React, { useState, useEffect, useRef } from "react";

//@ts-ignore
const Link = ({ link }) => {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    //@ts-ignore
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    //@ts-ignore
    const backHeight = backEl.current.getBoundingClientRect().height;
    //@ts-ignore
    setHeight(Math.max(frontHeight, backHeight, 50));
  }

  useEffect(setMaxHeight, [link.description, link.url]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  });
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip);
      }}
      // style={{ height: height }}
    >
      <div
        className="front"
        //@ts-ignore
        ref={frontEl}
      >
        {link.url}
      </div>
      <div
        className="back"
        //@ts-ignore
        ref={backEl}
      >
        {link.description}
      </div>
    </div>
  );
};

export default Link;
