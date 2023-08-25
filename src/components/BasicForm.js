import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameInputChangeHandler,
    valueBlurHandler: lastnameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredLastNameIsValid
    ) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div
          className={
            !nameInputHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div
          className={
            !lastnameInputHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onBlur={lastnameInputBlurHandler}
            onChange={lastnameInputChangeHandler}
            value={enteredLastName}
          />
          {lastnameInputHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div
        className={
          !emailInputHasError ? "form-control" : "form-control invalid"
        }
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please Enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
