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
      "Als Wirtschaftsinformatik-Student bringe ich jede Menge neues Wissen und Offenheit gegenüber Technologien, Innovationen sowie deren Anwendung in Unternehmensalltag. Wie ich aus Erfahrung gelernt habe: je breiter die Fachkenntnisse, desto einfacher ist es, eine Lösung zu finden.",
    highlights: {
      bullets: [
<<<<<<< HEAD
        "Front- and Backend Entwicklung. UI / UX Design",
        "IT Operations (WAN/LAN, Windows/Linux, Infrastruktur)",
        "Projektmanagement (Agile, Scrum)",
        "Cloud Services (Amazon Web Services, Red Hat)",
        "Prozessmodelierung und -management. Virtualsierung"
=======
        "Front- and Backend Entwicklung. API Integration. Mockup Design. ",
        "IT Operations (WAN/LAN, Windows/Linux, Infrastruktur)",
        "Projektmanagement (Agile, Scrum)",
        "Cloud Services (Amazon Web Services, Red Hat)",
        "Prozessmodelierung und -management. Virtualsierung.",
>>>>>>> b92dc4b60854dfb4e138ac1f160669b7c84d82c9
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
        <ScreenHeading title={"Über mich"} subHeading={"Warum mich wählen?"} />
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
