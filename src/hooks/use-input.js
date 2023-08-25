import { useReducer } from "react";

const intialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: state.value,
    };
  } else if (action.type === "RESET") {
    return {
      isTouched: false,
      value: "",
    };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    intialInputState
  );
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
    dispatch({ value: event.target.value, type: "INPUT" });
  };
  const valueBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
