import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/style/Content.scss";
const ScrollToElementLink = ({ targetId, linkText }) => {
  const scrollToElement = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <p onClick={scrollToElement} className="text-nav">
      {linkText}
    </p>
  );
};
const Content = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    axios(
      `https://6576de7a197926adf62ca23d.mockapi.io/https/commands/devStar/sd/${id}`
    ).then(({ data }) => setTeamData(data));
  }, [id]);

  return (
    <>
      <section className="content-section">
        <div className="container">
          <div className="hover-card">
            <div className="flex__content">
              <div className="">
                <img id="avatar" className="avatar__content" src={teamData.avatar} alt="" />
              </div>
              <div className="">
                <h1 className="name">{teamData.name}</h1>
                <h2 className="text-pro">{teamData.title}</h2>
                <div key={teamData.id} className="content-img__skill">
                  {teamData.images &&
                    teamData.images
                      .slice(`${teamData.sliceStart}`, `${teamData.sliceEnd}`)
                      .map(
                        (image, key) => (
                          console.log(image.img),
                          (
                            <div key={key} className="\">
                              <img
                                className="img-skill"
                                src={image.img}
                                alt=""
                              />
                            </div>
                          )
                        )
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section__2">
        <div className="container">
          <div className="section__2-wrapper">
            <div className="lorem">
              <h2 id="sel" style={{ color: "#5ac1e1" }}>
                Цель
              </h2>
              <p className="target">{teamData.target}</p>
              <div className="skills">
                <h1 id="navyki" className="logo-text">
                  Навыки
                </h1>
                {teamData.skills &&
                  teamData.skills
                    .slice(`${teamData.sliceStart}`, `${teamData.sliceEnd}`)
                    .map((skill, index) => (
                      <div>
                      <p
                        style={{ paddingLeft: "20px" }}
                        className="text-skill"
                        key={index}
                      >
                        <span>{skill.skill}</span>
                      </p>
                      </div>
                    ))}
              </div>
            </div>
            <div
              style={{ paddingLeft: "20px", paddingTop: "20px", cursor: 'pointer' }}
              className="section2-card"
            >
              <h1 style={{ color: "#5ac1e1" }} className="logo-navigation">
                Навигация
              </h1>
              <ScrollToElementLink targetId="avatar" linkText="Цель" />
              <ScrollToElementLink targetId="sel" linkText="Навыки" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
