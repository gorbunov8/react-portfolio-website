import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Wirtschaftsinformatiker, Front- und Back-End entwickler mit fundierten Kenntnissen in IT-operations, DevOps, Requierments Engineering, Project- sowie Prozessmanagement. Motiviert eine Bereicherung für Ihr Unternehmen zu sein.",
    highlights: {
      bullets: [
        "Full Stack Web Entwicklung",
        "IT Operations",
        "Requirments Engineering",
        "Cloud Services",
        "Sustain Business Development",
        "Prozessmodelierung",
      ],
      heading: "Hier sind meine Kernkompetenzen:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"Über mich"} subHeading={"Warum mich wehlen?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Stellt mich ein{" "}
              </button>
              <a href="Lebenslauf.pdf" download="VladyslavGorbunov.pdf">
                <button className="btn highlighted-btn">
                  Lebenslauf herunterladen
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
