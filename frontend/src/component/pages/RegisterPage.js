import React, { useState } from "react";
import Input from "../parts/Input";
// import axios from "axios";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ArrayOfFullName = fullName.split(" ");
  const firstName = ArrayOfFullName[0];
  const lastName = ArrayOfFullName[1];

  const onSubmit = async (e) => {
    console.log("submitting frm frontend");
    e.preventDefault();
    setSuccess("");
    const user = {
      firstName,
      lastName,
      email,
      userName,
      password,
    };

    const postInfo = fetch(`${process.env.REACT_APP_API}/auth/register`, {
      // setEmailAdding method type
      method: "POST",

      body: JSON.stringify(user),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console

      .then((data) => {
        console.log(data);
        data.error && setError(data.error);
        data.message && setSuccess(data.message);
        if (data.message) {
          window.location.pathname = "/login";
        }
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      });
  };

  return (
    <div className="registration">
      <div className="register login">
        <h1>4go</h1>
        <form onSubmit={onSubmit}>
          <div className={error ? "alert alert-danger" : "none"}>{error}</div>
          <div className={success ? "alert alert-success" : "none"}>
            {success}
          </div>

          <Input
            type="text"
            placeholder="Username"
            name="userName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setError("");
              setSuccess("");
            }}
          />
          <Input
            type="text"
            placeholder="fullname"
            name="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setError("");
              setSuccess("");
            }}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setSuccess("");
            }}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
              setSuccess("");
            }}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
              setSuccess("");
            }}
          />
          {/* <div className="gender">
            <p className="genderP">Gender</p>
          </div>
          <div className="regRadio">
            <div className="rad">
              <Input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="rad">
              <Input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div> */}
          <div className="account">
            <p>Have an account ?</p>
            <h5>
              <a href="/login">Login In</a>
            </h5>
          </div>
          <Input type="Submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
