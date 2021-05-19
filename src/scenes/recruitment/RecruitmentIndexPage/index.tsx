import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import RecruitmentCard from "../../../components/RecruitmentCard";
import Carousel from "../../../assets/Carousel";
import styles from "./style.module.scss";

const RecruitmentIndexPage = () => {
  const [recommendedRecruitmentItems, setRecommendedRecruitmentItems] = useState();
  const [allRecruitmentItems, setAllRecruitmentItems] = useState();

  useEffect(() => {
    getRecruitments();
  }, [])

  // 募集一覧を取得
  function getRecruitments() {
    const api = axios.create();
    axios.all([
      api.get('https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments/recommended'),
      api.get('https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments')
    ])
    .then(axios.spread((api1Result, api2Result) => {
      // おすすめの募集
      setRecommendedRecruitmentItems(api1Result.data.map((item: any) => (
        <RecruitmentCard key={item.id} logoSrc={"./images/logo01.png"} title={item.title} avatorSrc={"./images/avator01.png"} companyName={item.company.name}></RecruitmentCard>
      )));
      
      // すべての募集
      setAllRecruitmentItems(api2Result.data["recruitments"].map((item: any) => (
        <RecruitmentCard key={item.id} logoSrc={"./images/logo01.png"} title={item.title} avatorSrc={"./images/avator01.png"} companyName={item.company.name}></RecruitmentCard>
      )));
    }));
  }

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
