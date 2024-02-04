import React, { useRef } from "react";

const Reference = () => {
  const inpRef = useRef(null);

  const handleclick = () => {
    inpRef.current.focus();
  };
  return (
    <div>
      <h1>referencfe</h1>
      <input type="text" name="" id=" " ref={inpRef} />
      <button onClick={handleclick} type="button">
        Focus{" "}
      </button>
    </div>
  );
};

export default Reference;
