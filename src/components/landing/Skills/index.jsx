import React, { useState, Fragment } from "react";

//config
import { mySkills } from "../../../data/config";

const Skills = () => {
  const [tab, setTab] = useState("tab1");

  const skillsHeading = mySkills.skillsHeading;
  const hardSkills = mySkills.hardSkills;
  const softSkills = mySkills.softSkills;

  const skills = tab === "tab1" ? hardSkills : softSkills;

  return (
    <section
      className="page-section mb-0 bg-transparent text-light"
      id="skills"
    >
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase mb-0">
          {skillsHeading}
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row d-flex">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <div className="d-flex my-2">
              <button
                className={`btn ${
                  tab === "tab2" ? "btn-secondary" : "btn-primary"
                } lead ml-auto mr-4`}
                onClick={() => {
                  setTab("tab1");
                }}
              >
                <p
                  className="lead text-uppercase mb-0"
                  style={{ fontWeight: 400 }}
                >
                  hardSkills
                </p>
              </button>
              <button
                className={`btn ${
                  tab === "tab1" ? "btn-secondary" : "btn-primary"
                } mr-auto`}
                onClick={() => {
                  setTab("tab2");
                }}
              >
                <p
                  className="lead text-uppercase mb-0"
                  style={{ fontWeight: 400 }}
                >
                  softSkills
                </p>
              </button>
            </div>
            <div className="card text-secondary">
              <div className="card-body pb-0">
                <div className="row mb-0">
                  {skills.map((skill, key) => (
                    <Fragment key={`${skill.icon}`}>
                      <div className="col-6 col-sm-4 col-lg-3">
                        <p className="lead">
                          <i
                            className={`${skill.icon} mr-3`}
                            style={{
                              color: skill.color,
                            }}
                          />
                          {skill.name}
                        </p>
                      </div>
                      <div className="col-6 col-sm-8 col-lg-9">
                        <div className="progress mt-1">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${skill.value}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;