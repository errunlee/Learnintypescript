import { useReducer } from "react";

const initialState = { count: 0 };

type StateType = {
  count: number;
};

type UpdateAction = {
  type: "add" | "sub";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type ActionType = UpdateAction | ResetAction;
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "add": {
      return { count: state.count + action.payload };
    }
    case "sub": {
      return { count: state.count - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "add", payload: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "sub", payload: 5 })}>
        Decrease by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Reducer;
