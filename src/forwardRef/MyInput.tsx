import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  );
});

export default MyInput;
