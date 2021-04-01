import React from "react";
import styles from "./style.module.scss";

import avator01 from "../../images/avator01.png";

const RecruitmentCard = (props: { logoFileName: string | undefined, avatorFileName: string | undefined }) => {
  var logoSrc = './images/' + props.logoFileName;
  var avatorSrc = './images/' + props.avatorFileName;

  return (
    <div className={styles.card}>
      <img src={logoSrc} />

      <div className={styles.card_detail}>
        <div className={styles.card_detail_text}>3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！</div>

        <div className={styles.card_detail_avators}>
          <img src={avatorSrc} />
          <span>株式会社</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
