import React from "react";
import { Link } from "react-router-dom";
import RecruitmentCard from "../../../components/RecruitmentCard";
import Carousel from "../../../assets/Carousel";
import styles from "./style.module.scss";
import DummyData from "../../../DummyData.json";

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
  const items = DummyData.map((item) => (
    <RecruitmentCard key={item.id} logoSrc={item.LogoSrcURL} title={item.RecruitmentTitle} avatorSrc={item.AvatorSrcURL} companyName={item.CompanyName}></RecruitmentCard>
  ));

  return (
    <div className={styles.text}>
      <Link to="/sign_in">ログイン</Link>

      <div>
        <div>
          <div className={styles.title}>
            <div>おすすめの募集</div>
          </div>

          <Carousel children={items}></Carousel>
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
