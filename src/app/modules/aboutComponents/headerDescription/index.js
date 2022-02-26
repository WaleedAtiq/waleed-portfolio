import React, { Component, memo, useEffect, useState } from "react";
import { Transition, config } from "react-spring/renderprops";
import Div from "Common/components/div";
import styles from "./header_description.module.scss";
import ContactComponent from "Common/components/contactComponent";

const HeaderDescription = ({
  showDescription,
  onClickProject,
  onClickTimeline,
  isFirstTime
}) => {

  return (
    <Transition
      items={showDescription}
      from={{
        opacity: 0,
        transform: "translateY(calc(50vh - 0px))"
      }}
      enter={{
        opacity: 1,
        transform: "translateY(calc(50vh - 145px))"
      }}
      leave={{
        opacity: 0
      }}
      config={isFirstTime ? { delay: 300 } : config.default}
    >
      {showDescription =>
        showDescription &&
        (props => (
          <Div style={props} className={styles.user_description_container}>
            <div className={styles.user_description}>
              <Div row justify align className={styles.user_button_container}>
              Hi, I am
              <Div
                align
                className={styles.user_button}
                onClick={onClickTimeline}
              >
                <a className={styles.name} href="https://www.facebook.com/Waleeeeeeeeeeeeeeed/" target="_blank"> <b >Waleed Atiq </b> </a>
                <Underline isFirstTime={isFirstTime} />
              </Div>, A
              Software Engineer </Div>with 4+ years of Web Development
              experience on various Platforms, Passionate to build Polished,
              Innovative and well-detailed Web/Mobile Apps with Fluid Animations to
              complement the Design.
              {/* <br/><br/> In my spare time, I usually read or play video games but mostly i try to work on new ideas and learn. */}
            </div>

            <Div row justify align className={styles.user_button_container}>
              Checkout my
              <Div
                align
                className={styles.user_button}
                onClick={onClickTimeline}
              >
                Timeline
                <Underline isFirstTime={isFirstTime} />
              </Div>
              and
              <Div
                align
                className={styles.user_button}
                onClick={onClickProject}
              >
                Technologies
                <Underline isFirstTime={isFirstTime} />
              </Div>
              that I worked on.
            </Div>

            <ContactComponent className={styles.contact_container} />
          </Div>
        ))
      }
    </Transition>
  );
};

const Underline = ({ isFirstTime }) => (
  <Transition
    items={true}
    from={{
      transform: isFirstTime ? "scale(0)" : "scale(1)"
    }}
    enter={{
      transform: "scale(1)"
    }}
    config={{ delay: 800 }}
  >
    {showUnderline =>
      (props => (
        <div
          style={props}
          className={`${styles.underline} ${styles.show_underline}`}
        ></div>
      ))
    }
  </Transition>
);


export default memo(HeaderDescription);
