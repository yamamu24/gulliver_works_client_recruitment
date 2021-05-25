import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../assets/Carousel";
import styles from "./style.module.scss";
import { useRecruitmentIndexPage } from "./presenter";

const RecruitmentIndexPage = () => {
  const { recommendedRecruitmentItems, allRecruitmentItems } = useRecruitmentIndexPage();

  return (
    <div className={styles.text}>
      <Link to="/sign_in">ログイン</Link>

      <div>
        <div>
          <div className={styles.title}>
            <div>おすすめの募集</div>
          </div>

          <Carousel children={recommendedRecruitmentItems}></Carousel>
        </div>

        <div>
          <div className={styles.title}>
            <div>すべての募集</div>
          </div>

          <div>
            {allRecruitmentItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentIndexPage;
