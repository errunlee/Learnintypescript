import React from "react";

type NewType = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Clickin({ handleClick }: NewType) {
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Click me guy...
      </button>
    </div>
  );
}

export default Clickin;
