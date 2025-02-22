import React, { useEffect, useState } from "react";
import Button from "../../button/Button";
import InputField from "../../inputfield/Field";
import Title from "../../title/Title";
import axios from "axios";

const AboutSettingsForm: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get("http://finejob/frontend/data-people").then((response) => {
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }, []);

  const update = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios({
      method: "POST",
      url: "http://finejob/frontend/update-people",
      data: formData,
    })
      .then((response) => {
        let state = response.data["state"];
        if (state != false) {
          setMsg("Data Updated!");
        }
      })
      .catch((error) => {
        console.log("Err: " + error);
      });
  };

  return (
    <div className="container" id="container-settings-form">
      <form className="m-auto" onSubmit={update}>
        <Title
          variant="h2"
          className="text-center mb-5"
          children="Settings"
        ></Title>
        <InputField
          type="text"
          content="first_name"
          placeholder="First Name"
          defaultValue={firstName}
        />
        <InputField
          type="text"
          content="last_name"
          placeholder="Last Name"
          defaultValue={lastName}
        />
        <InputField
          type="email"
          content="email"
          placeholder="Email Adress"
          defaultValue={email}
        />
        <InputField
          type="password"
          content="password"
          placeholder="Password"
          defaultValue={password}
        />
        <div className="text-success">{msg}</div>
        <div className="d-flex flex-nowrap center">
          <Button className="mt-4" label="Save" />
          <Button
            className="mt-4 back-button"
            label="Back"
            variant="link"
            to="/posts"
          />
        </div>
      </form>
    </div>
  );
};

export default AboutSettingsForm;
