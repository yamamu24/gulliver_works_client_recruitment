import React, { useEffect, useState } from "react";
import { HttpClient } from "../../../utilities/axiosInstance";
import RecruitmentCard from "../../../components/RecruitmentCard";

export function useRecruitmentIndexPage() {
    const [recommendedRecruitmentItems, setRecommendedRecruitmentItems] = useState();
    const [allRecruitmentItems, setAllRecruitmentItems] = useState();

    useEffect(() => {
        getRecruitments();
    }, [])

    // 募集一覧を取得
    function getRecruitments() {
        // おすすめの募集
        HttpClient.get('https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments/recommended')
        .then((res) => {
            setRecommendedRecruitmentItems(res.data.map((item: any) => (
                <RecruitmentCard key={item.id} logoSrc={"./images/logo01.png"} title={item.title} avatorSrc={"./images/avator01.png"} companyName={item.company.name} > </RecruitmentCard>
            )));
        });

        // すべての募集
        HttpClient.get('https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/recruitments')
        .then((res) => {
            setAllRecruitmentItems(res.data["recruitments"].map((item: any) => (
                <RecruitmentCard key={item.id} logoSrc={"./images/logo01.png"} title={item.title} avatorSrc={"./images/avator01.png"} companyName={item.company.name}></RecruitmentCard>
            )));
        });
    }

    return { recommendedRecruitmentItems, allRecruitmentItems };
}