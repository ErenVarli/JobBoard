import React, { useState } from "react";
import Title from "../title/Title";
import Paragraph from "../title/Paragraph";
import Button from "../button/Button";
import axios from "axios";
import NavbarUser from "../navbar/NavbarUser";
import { useEffect } from "react";

interface Ad {
  ad_id: number;
  title: string;
  company_id: string;
  type_contract: string;
  description: string;
  city: string;
  salary: number;
}

const Card: React.FC = () => {
  const [ad, setAd] = useState<Ad[] | null>(null);
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  function growEffect(id: number) {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  useEffect(() => {
    axios.get("http://finejob/frontend/posts").then((response) => {
      setAd(response.data);
    });
  }, []);

  return (
    <>
      <NavbarUser />
      <div className="mt-5">
        <ul>
          {ad &&
            ad.map((ad) => {
              const isExpanded = expandedCards[ad.ad_id] || false;
              const boxWidth = isExpanded ? 1200 : 600;
              const boxHeight = isExpanded ? 600 : 220;
              const buttonText = isExpanded ? "Close" : "See More";
              const charLimit = isExpanded ? 4500 : 130;
              const dots = isExpanded ? "" : "...";
              const displayMinim = isExpanded ? "block" : "none";
              const paddingStyle = isExpanded ? "20px 50px" : "0";
              const marginStyle = isExpanded ? "30px 20px 0px 20px" : "0";
              const descriptionWidth = isExpanded ? "1200" : "700";
              const backgroundColor = isExpanded ? "#00ADB5" : "#393E46";

              return (
                <div className="card-container" key={ad.ad_id}>
                  <div
                    className="card mt-4 p-3"
                    style={{
                      height: `${boxHeight}px`,
                      width: `${boxWidth}px`,
                      backgroundColor: `${backgroundColor}`,
                    }}
                  >
                    <div
                      className="d-flex card-description"
                      id="description-post"
                      style={{ width: `${descriptionWidth}px` }}
                    >
                      <div>
                        <Title variant="h3">{ad.title}</Title>
                        <Paragraph>
                          {ad.description.substring(0, charLimit).trim() + dots}
                        </Paragraph>
                        <Button
                          onClick={() => growEffect(ad.ad_id)}
                          className="card-button right"
                          label={buttonText}
                        />
                      </div>
                      <div
                        className="description-minim-container"
                        style={{
                          display: `${displayMinim}`,
                          padding: `${paddingStyle}`,
                          margin: `${marginStyle}`,
                        }}
                      >
                        <div className="description-minim">
                          <h3>Wage: {ad.salary}€</h3>
                          <h3>Contract Type: {ad.type_contract}</h3>
                          <h3>Location: {ad.city}</h3>
                          <h3>Company: {ad.company_id}</h3>
                        </div>
                        <Button
                          className="apply-button"
                          label="Apply now"
                          variant="link"
                          to="/apply-post"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Card;
