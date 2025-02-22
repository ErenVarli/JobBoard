import React from "react";
import Button from "../../button/Button";
import Title from "../../title/Title";

const ProfileForm: React.FC = () => {
    return (
        <div className="container">
          <form className="side-form">
            <div>
              <div id="form-header" className="d-flex flex-nowrap mb-4 align-center">
                  <Title variant="h2">Settings</Title>
              </div>
                <div className="d-flex row justify-content-center" id="settings-menu">
                    <Button className="empty-button m-2" label="Informations personnelles" to="/personnal-informations-settings"/>
                    <Button className="empty-button m-2" label="Modifier votre adresse e-mail" to="/email-settings"/>
                    <Button className="empty-button m-2" label="Modifier votre mot de passe" to="/password-settings"/>
              </div>
            </div>
          </form>
        </div>
    );
};

export default ProfileForm;