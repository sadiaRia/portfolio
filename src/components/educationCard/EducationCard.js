import React, { useState, useEffect, createRef } from "react";
import "./EducationCard.css";
import ColorThief from "colorthief";

export default function EducationCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };

  return (
    <div className="education-card">
      <div className="education-text-details">
        <h5 className="education-text-role">{cardInfo.degree}</h5>
        <h5 className="education-text-date">{cardInfo.institute}</h5>
        <p className="education-text-other">{cardInfo.group}</p>
        <p className="education-text-other">{cardInfo.result}</p>
        {cardInfo.board && <p className="education-text-other">{cardInfo.board}</p>}
        <p className="education-text-other">{cardInfo.year}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
