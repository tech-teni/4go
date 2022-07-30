import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../parts/Input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    console.log("submitting frm frontend");
    e.preventDefault();
    setSuccess("");
    setError("");

    const user = {
      email,
      password,
    };

    const postInfo = fetch(`${process.env.REACT_APP_API}/auth/login`, {
      // setEmailAdding method type
      method: "POST",
      mode: "cors",
      // Adding body or contents to send
      body: JSON.stringify(user),

      // Adding headers to the request
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
        if (data.token) {
          setSuccess("sucessfully log in");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem(" user", data.user);
          localStorage.setItem("id", data.user._id);
          localStorage.setItem("email", data.user.email);

          setTimeout(() => {
            navigate("/home");
          }, 3000);
        }
      })
      .catch((e) => {
        setError(e);
        console.log(e);
      });
  };

  return (
    <div className="login">
      <h1>4go</h1>

      <form action="" onSubmit={onSubmit}>
        <div className={error ? "alert alert-danger" : "none"}>{error}</div>
        <div className={success ? "alert alert-success" : "none"}>
          {success}
        </div>

        <Input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSuccess("");
            setError("");
          }}
        />
        <Input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setSuccess("");
            setError("");
          }}
        />

        <div className="account">
          <p>Dont have an account ?</p>
          <h5>
            <a href="/register">Sign up</a>{" "}
          </h5>
        </div>
        <Input type="Submit" placeholder="Password" value="Log in" />
      </form>
    </div>
  );
};

export default LoginPage;
