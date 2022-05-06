import React from "react";
// import validator from "validator";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Signup = () => {
  //////////////
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  ///////////////
  const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [showPassword, setPassword] = React.useState("");
  // const [confirmpassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  // const [emailError, setEmailError] = React.useState("");

  function checkFields(e) {
    e.preventDefault();

    if (username.length < 4) {
      setErrorMessage("Username must be at least 4 characters");
    } else if (values.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
    } else if (values.password === "password") {
      setErrorMessage("Password can not be 'password'");
      // } else if (confirmpassword !== "password") {
      // setErrorMessage("Password doesn't match");
    } else if (values.password === "password1") {
      setErrorMessage("Are you that dumb?");
    } else {
      setErrorMessage(`Welcome ${username}!`);
    }
  }

  return (
    <form onSubmit={checkFields} style={{ textAlign: "center" }}>
      <br />
      <div>
        <InputLabel className="">Email</InputLabel>
        <Input
          type={values.showEmail ? "text" : "email"}
          onChange={"email"}
          value={values.email}
        />
      </div>
      <div>
        <br />
        <InputLabel className="required">Username</InputLabel>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
      </div>
      <div>
        <br />
        <InputLabel className="required" htmlFor="standard-adornment-password">
          Password
        </InputLabel>
        <Input
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <br />
      <div>
        <br />
        <button>Submit</button>
      </div>
      <p>{errorMessage}</p>
    </form>
  );
};

export default Signup;
