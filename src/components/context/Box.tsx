import React, { useContext } from "react";
import { ContextProvider, TestContext } from "./ThemeContext";
function Box() {
  const { theme } = useContext(TestContext);
  return (
    <ContextProvider>
      <div style={theme.primary}>Box Componetn</div>;
    </ContextProvider>
  );
}

export default Box;
