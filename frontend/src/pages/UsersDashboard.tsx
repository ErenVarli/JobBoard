import React, { Component, useEffect, useState } from "react";
import Card from "../components/card/CardUsers";
//import '../style/index.css';
import axios from "axios";
import Button from "../components/button/Button";
import NavbarAdmin from "../components/navbar/NavbarAdmin";

export interface Peoples {
  people_id: number;
  last_name: string;
  first_name: string;
  email: string;
  password: string;
}

export default function UserAdmin() {
  const [people, setPeople] = useState<Peoples[] | null>(null);
  const [modifyPeoples, setModifyPeoples] = useState<number | null>(null);

  useEffect(() => {
    axios.get("http://finejob/frontend/peoples").then((response) => {
      setPeople(response.data);
    });
  }, []);

  const handleModifyClick = (people_id: number) => {
    setModifyPeoples(people_id);
  };

  return (
    <>
      <NavbarAdmin />
      <div style={{ marginLeft: "20%" }}>
        <div className="postsAdmin">
          <Button className="btn-admin btn-creat-ad">CREATE NEW USER</Button>
          <div className="card-containerAdmin">
            {people &&
              people.map((people) => {
                return (
                  <Card
                    key={people.people_id}
                    people_id={people.people_id}
                    last_name={people.last_name}
                    first_name={people.first_name}
                    email={people.email}
                    password={people.password}
                    peoples={people}
                    isModify={modifyPeoples == people.people_id}
                    modifyClick={handleModifyClick}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
