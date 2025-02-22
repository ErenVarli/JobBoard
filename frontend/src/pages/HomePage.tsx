import React from "react";
import logo from "../assets/images/logo.png";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="sub-container flex-column">
        <div>
          <img src={logo} alt="Logo FineJob" width={225} />
        </div>
        <div>
          <h1>FineJob</h1>
        </div>
        <div>
          <h2>
          Welcome to Finejob, find your job now!
          </h2>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
