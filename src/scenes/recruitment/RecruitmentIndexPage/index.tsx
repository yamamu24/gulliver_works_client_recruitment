import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import styles from "./style.module.scss";

const logo01 = "./images/logo01.png";
const avator01 = "./images/avator01.png";
const title01 = "3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！";
const companyName01 = "株式会社";

const sliderSettings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '15%',
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const RecruitmentIndexPage = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <RecruitmentCard key={"card" + i} logoSrc={logo01} title={title01} avatorSrc={avator01} companyName={companyName01}></RecruitmentCard>
    )
  }

  return (
    <div className={styles.text}>
      <Link to="/sign_in">ログイン</Link>

      <div>
        <div>
          <div className={styles.title}>
            <div>おすすめの募集</div>
          </div>

          <Slider {...sliderSettings} className={styles.sliderArea}>
            {items}
          </Slider>
        </div>

        <div>
          <div className={styles.title}>
            <div>すべての募集</div>
          </div>

          <div>
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentIndexPage;
