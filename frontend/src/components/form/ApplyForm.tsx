import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import InputField from "../inputfield/Field";
import Title from "../title/Title";
import axios from "axios";

const ApplyForm: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://finejob/frontend/data-people").then((response) => {
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
    });
  }, []);

  const update = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios({
      method: "POST",
      url: "http://finejob/frontend/apply",
      data: formData,
    })
      .then((response) => {
        let state = response.data["state"];
        if (state != false) {
          setMsg("Sent!");
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
          children="Apply now!"
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

        <div className="mb-3  m-2">
          <label htmlFor="comment" className="form-label text-white">
           Tell more about you:
          </label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
          ></textarea>
        </div>

        <div className="text-success">{msg}</div>
        <div className="d-flex flex-nowrap center">
          <Button className="mt-4" label="Apply" />
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

export default ApplyForm;
