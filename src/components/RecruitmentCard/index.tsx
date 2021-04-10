import React, { FC } from "react";
import styles from "./style.module.scss";

import Avator from "../Avator";

type props = {
  logoSrc: string;
  title: string;
  avatorSrc: string;
  companyName: string
};

const RecruitmentCard: FC<props> = ({ logoSrc, title, avatorSrc, companyName }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={logoSrc} alt="企業イメージ画像" />

      <div className={styles.card_detail}>
        <div className={styles.card_detail_text} title={title}>{title}</div>

        <div className={styles.card_detail_avators}>
          <Avator avatorSrc={avatorSrc} size={"medium"}></Avator>
          <span>{companyName}</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
