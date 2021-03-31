import React from "react";
import styles from "./style.module.scss";
import logo from "../../images/EnterpriseLogo/logo01.jpg";
import avator from "../../images/Avator/M.png";

const RecruitmentCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card_logoImg} src={logo} alt="企業ロゴ" />

      <div className={styles.card_detailArea}>
        <div className={styles.card_recruitmentTitle}>3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！</div>

        <div className={styles.card_avatorArea}>
          <img src={avator} alt="アイコン" />
          <span>株式会社</span>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCard;
