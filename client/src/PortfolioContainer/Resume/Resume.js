import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Ausbildung", logoSrc: "education.svg" },
    { label: "Arbeitserfahrung", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projekte", logoSrc: "projects.svg" },
    { label: "Interessen", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 70 },
    { skill: "HTML / CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Typescript", ratingPercentage: 45 },
    { skill: "Angular", ratingPercentage: 45 },
    { skill: "Firebase DB", ratingPercentage: 80 },
    { skill: "Mongo DB", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Eigene Portfolio Website ",
      duration: { fromDate: "04.2022", toDate: "05.2022" },
      description:
        "React-Portfolio-Website zum alle wichtige Informationen über meine Persönlichkeit an einem Ort darstellen.",
      subHeading: "Angewendete Technologie: React JS, Bootsrap",
    },
    {
      title: "Discover Bern ",
      duration: { fromDate: "04.2022", toDate: "derzeitig" },
      description:
        "Ein interesantes Projekt für die Berner Fachhochschule, der dem User erlaubt einen QR-Code scannen und eine Information der angezeigte Denkmalen lesen.",
      subHeading: "Angewendete Technologie: Typescript, Angular, Firebase",
    },
    {
      title: "e-form.sg ",
      duration: { fromDate: "04.2022", toDate: "derzeitig" },
      description:
        " Webplatform, die studiumbegleitend für Steuerverwaltung der Kanton St.Gallen mit hilfe von Wordpress entwickelt wird und den steuerpflichtigen Personen eine digitale Formular- und Gesuchabgabe ermöglicht.",
      subHeading: "Angewendete Technologie:  Wordpress, HTML.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Berner Fachhochschule"}
        subHeading={"BACHELOR OF SCIENCE Wirtschaftsinformatik"}
        fromDate={"09.2020"}
        toDate={"derzeitig"}
      />

      <ResumeHeading
        heading={"Interkantonale Sicherheits- Ausbildung"}
        subHeading={"Fachkunde, Branchenkunde, Sozialkompetenz"}
        fromDate={"05.2017"}
        toDate={"05.2017"}
      />
      <ResumeHeading
        heading={"Gymnasiale Maturität "}
        subHeading={"Schwerpunktfach: Wirtschaft & Recht"}
        fromDate={"08.2013"}
        toDate={"07.2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Freelancing"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2022"}
          toDate={"derzeitig"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Aktuell arbeite an der Projekten
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Entwickelte dies und das
          </span>
          <br />
          <span className="resume-description-text">
            - Auch hier habe ich etwas entwickelt{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Waiterbildung auch erwähnen
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Schwimmen"
        description="Schwimmen als anspruchsvolle Ausgleich zum Alltag."
      />
      <ResumeHeading
        heading="Sound Design"
        description="Leistungsfähige Home Studio als mentale Entlastund und Förderung der Kreativität."
      />
      <ResumeHeading
        heading="Outdoor Aktivitäten"
        description="Vor allem bei schönem Wetter macht es mir viel Spass mit meinen Kollegen oder auch alleine die Natur geniessen."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
