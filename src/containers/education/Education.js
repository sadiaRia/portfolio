import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";


export default function WorkExperience() {
  if (education.viewEducation) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="education">
            <div>
              <h1 className="experience-heading">Education</h1>
              <div className="experience-cards-div">
                {education.experience.map((card) => {
                  return (
                    <EducationCard
                      cardInfo={{
                        degree: card.degree,
                        institute: card.institute,
                        group: card.group,
                        result: card.result,
                        board: card.board,
                        year: card.year,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
