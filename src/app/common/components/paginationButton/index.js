import React from 'react';
import Div from 'Common/components/div';
import leftArrowIcon from "Icons/icon-left-arrow.png";
import styles from './pagination_button.module.scss';

const PaginationButton = ({ className, isEnabled, onClick, isRight }) => {
  return (
    <Div
      align
      justify
      className={`${styles.button_container} ${className} ${!isEnabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      <img alt="" className={`${styles.arrow} ${isRight ? styles.right_arrow : null}`} src={leftArrowIcon} />
    </Div>
  );
}

export default PaginationButton;
