import React, { useState } from "react";
import styles from "./CertShow.module.css";

const CERTS_DATA = [
  {
    id: "ironHackCert",
    imageUrl: "/assets/EmidioCertIronHack.jpg",
    text: `Successfully completed an intensive, project-based program focused on
            transforming students into job-ready Full Stack Developers. The
            curriculum centered on mastering the MERN stack (MongoDB, Express.js,
            React, Node.js), teaching practical skills and industry workflows
            through hands-on application development and collaborative projects.`,
  },
  {
    id: "freeCodeCampCert",
    imageUrl: "/assets/FreeCodeCampCert.png",
    text: `Verified expertise in front-end fundamentals, including HTML5 and
          CSS3. Demonstrated the ability to build fully functional, accessible,
          and responsive websites using modern techniques like CSS Flexbox and
          Media Queries. Completion required building five distinct projects,
          confirming proficiency in creating web pages that adapt seamlessly
          across all devices.`,
  },
];

export function CertShow() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const activeItem = CERTS_DATA.find((item) => item.id === activeId);

  return (
    <div className={styles.imageToggleContainer}>
      <div className={styles.imageButtonsRow}>
        {CERTS_DATA.map((item) => (
          <button
            key={item.id}
            className={`${styles.imageButton} ${
              activeId === item.id ? styles.active : ""
            }`}
            onClick={() => handleToggle(item.id)}
          >
            <img
              src={item.imageUrl}
              alt={item.id}
              className={styles.toggleImage}
            />
          </button>
        ))}
      </div>

      <div className={styles.textDisplayArea}>
        {activeItem ? (
          <div className={styles.activeTextPanel}>
            <h3>
              {activeItem.id === "ironHackCert"
                ? "Ironhack Bootcamp"
                : "FreeCodeCamp RWD"}
            </h3>
            <p>{activeItem.text}</p>
          </div>
        ) : (
          <p className={styles.placeholderText}></p>
        )}
      </div>
    </div>
  );
}
