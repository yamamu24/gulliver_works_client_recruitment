import React, { FC } from "react";
import styles from "./style.module.scss";

import Avator from "../Avator";

type props = {
  logoFileName: string;
  avatorFileName: string;
};

const RecruitmentCard: FC<props> = ({ logoFileName, avatorFileName }) => {
  var logoSrc = './images/' + logoFileName;

  return (
    <div className={styles.card}>
      <img src={logoSrc} />

      <div className={styles.card_detail}>
        <div className={styles.card_detail_text}>3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！</div>

        <div className={styles.card_detail_avators}>
          <Avator avatorFileName={avatorFileName} size={"medium"}></Avator>
          <span>株式会社</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
