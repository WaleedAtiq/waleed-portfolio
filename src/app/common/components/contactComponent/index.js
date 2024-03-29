import React from "react";
import iconEmail from "Icons/icon-email.png";
import iconLinkedIn from "Icons/icon-linkedin.png";
import iconGithub from "Icons/icon-github.png";
import iconResume from 'Icons/icon-resume.png';
import iconEmailWhite from "Icons/icon-email-white.png";
import iconLinkedInWhite from "Icons/icon-linkedin-white.png";
import iconGithubWhite from "Icons/icon-github-white.png";
import iconResumeWhite from 'Icons/icon-resume-white.png';
import Div from "Common/components/div";
import styles from "./contact_component.module.scss";

const ContactComponent = ({ className, isWhite, hideResume }) => {
  return (
    <Div
      row
      justify
      align
      className={`${styles.social_container} ${className}`}
    >
      <a className={styles.icon_link} rel="noopener noreferrer" target="_blank" href="https://github.com/WaleedAtiq">
        <img
          src={isWhite ? iconGithubWhite : iconGithub}
          className={styles.icon}
          alt=""
        />
      </a>
      <a className={styles.icon_link} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/waleed-atiq/">
        <img
          src={isWhite ? iconLinkedInWhite : iconLinkedIn}
          className={styles.icon}
        />
      </a>
      <a className={styles.icon_link} rel="noopener noreferrer" target="_blank" href="mailto:waleedatiq4@gmail.com">
        <img
          src={isWhite ? iconEmailWhite : iconEmail}
          className={styles.icon}
          alt=""
        />
      </a>
      {
        !hideResume && (
          <a className={styles.icon_link} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/11MLdCJHQQqFs4QhiENKTWNdcX5j_Qe3A/view?usp=share_link">
          <img
            src={isWhite ? iconResumeWhite : iconResume}
            className={styles.icon}
            alt=""
          />
        </a>  
        )
      }
    </Div>
  );
};

export default ContactComponent;
