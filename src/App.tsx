import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import RecruitmentCard from "./components/RecruitmentCard";

const logo01 = "./images/logo01.png";
const avator01 = "./images/avator01.png";
const title01 = "3度の飯よりReact！フロントエンドのエキスパートになりたいエンジニア募集！";
const companyName01 = "株式会社";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/sign_in" component={SignInPage} />
    </div>

    <RecruitmentCard logoSrc={logo01} title={title01} avatorSrc={avator01} companyName={companyName01}></RecruitmentCard>
  </BrowserRouter>
);

export default App;
