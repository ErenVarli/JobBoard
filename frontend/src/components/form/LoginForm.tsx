import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../button/Button";
import InputField from "../inputfield/Field";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import Paragraph from "../title/Paragraph";
import axios from "axios";

const LoginForm: React.FC = () => {
  let [msg, setMsg] = useState("");

  const enregistrement = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios({
      method: "POST",
      url: "http://finejob/frontend/log-people",
      data: formData,
    })
      .then((response) => {
        let state = response.data["state"];
        let role = response.data["role"];

        if (state == true) {
          if (role == "admin") {
            window.location.href = "http://localhost:5173/adminPanel";
          } else {
            window.location.href = "http://localhost:5173/userPanel";
          }
          setMsg("");
        } else {
          setMsg("Email or password incorrect. Try again.");
        }
      })
      .catch((error) => {
        console.log("Err: " + error);
      });
  };

  return (
    <div className="container">
      <form className="m-auto" id="login-form" onSubmit={enregistrement}>
        <div>
          <div
            id="form-header"
            className="d-flex flex-nowrap mb-4 align-center justify-content-between"
          >
            <Title variant="h2">Login</Title>
            <img className="right" src={logo} alt="Logo FineJob" width="60" />
          </div>
          <InputField type="email" content="email" placeholder="Email Adress" />
          <InputField
            type="password"
            content="password"
            placeholder="Password"
          />
          <div id="msg" className="text-danger">
            {msg}
          </div>
          <div>
            <div className="d-flex flex-nowrap">
              <Paragraph>Don't have an account yet? </Paragraph>
              <Link className="mb-2" to="/signup">
                <div>&nbsp;Sign up.</div>
              </Link>
            </div>
          </div>
          <Button className="right mt-4" label="Login" variant="link" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;