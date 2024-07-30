import { ChangeEvent, useReducer } from "react";

type TAction = { type: string; payload: string };
const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};

const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          className="border"
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
        />
        <button className="px-3 py-1.5 rounded bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReducerForm;
