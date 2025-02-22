import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../button/Button";
import InputField from "../inputfield/Field";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import Paragraph from "../title/Paragraph";
import axios from "axios";

const SignUpForm: React.FC = () => {
  let [msg, setMsg] = useState("");

  const enregistrement = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios({
      method: "POST",
      url: "http://finejob/frontend/insert-people",
      data: formData,
    })
      .then((response) => {
        let state = response.data['state'];
        if (state == false){
          setMsg('Passwords are different.')
        }else{
          window.location.href = "http://localhost:5173/login";
        }
      })
      .catch((error) => {
        console.log("Err: " + error);
      });
  };

  return (
    <div className="container">
      <form className="m-auto" id="signup-form" onSubmit={enregistrement}>
        <div>
          <div className="mb-3">
            <div className="d-flex flex-nowrap justify-content-between">
              <Title variant="h2">Sign Up</Title>
              <img className="right" src={logo} alt="Logo FineJob" />
            </div>
          </div>

          <div className="d-flex-m">
            <InputField
              type="text"
              content="firstName"
              placeholder="First Name"
            />
            <InputField
              type="text"
              content="lastName"
              placeholder="Last Name"
            />
          </div>
          <InputField type="email" content="email" placeholder="Email Adress" />
          <div className="d-flex-m">
            <InputField
              type="password"
              content="password"
              placeholder="Password"
            />
            <InputField
              type="password"
              content="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <div className="d-flex-m">
            <select className="form-select m-2" name="role" id="role-select">
              <option value="">Choose a role</option>
              <option value="company">company</option>
              <option value="user">user</option>
            </select>
          </div>
          <div id="msg" className="text-danger m-2">
            {msg}
          </div>
          <div className="d-flex flex-nowrap">
            <Paragraph>Already have an account? </Paragraph>
            <Link className="mb-3" to="/login">
              <div>&nbsp;Login.</div>
            </Link>
          </div>
          <Button className="right" label="Sign Up" variant="link" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
