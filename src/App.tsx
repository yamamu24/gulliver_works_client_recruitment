import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import RecruitmentCard from "./components/RecruitmentCard";

const logo01 = "logo01.png";
const avator01 = "avator01.png";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/sign_in" component={SignInPage} />
    </div>

    <RecruitmentCard logoFileName={logo01} avatorFileName={avator01}></RecruitmentCard>
  </BrowserRouter>
);

export default App;
