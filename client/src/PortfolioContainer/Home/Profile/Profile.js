import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/gorbunov8" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vladyslavgorbunov"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://web.telegram.org/k/" target="_blank">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hallo, ich heiße <span className="highlighted-text">Vladyslav</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="typical-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Entwickler💻",
                    1000,
                    "Produkt Designer🧭",
                    1000,
                    "Student📚",
                    1000,
                    "Requirements Engineer🛠",
                    1000,
                    "Open sourcer📖",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Entwicklung von Web basierten Applikationen
            </span>
          </div>

          <div className="profile-options">
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
