import { useReducer } from "react";
type TAction = { type: string; payload?: number };
const initialState = { count: 0 };
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };

    default:
      return initialState;
  }
};
const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold">{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-3 py-1.5 rounded bg-blue-500 text-white"
        >
          increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-3 py-1.5 rounded bg-red-500 text-white"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerExample;
