import React, { FC } from "react";
import styles from "./style.module.scss";

type props = {
    avatorSrc: string;
    size: string;
}

const Avator: FC<props> = ({ avatorSrc, size }) => {
    return (
        <img src={avatorSrc} className={styles.avatorImg} data-size={size} alt="企業アイコン画像" />
    );
}

export default Avator;
