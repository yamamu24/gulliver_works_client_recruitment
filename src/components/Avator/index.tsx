import React, { FC } from "react";
import styles from "./style.module.scss";

type props = {
    avatorFileName: string;
    size: string;
}

const Avator: FC<props> = ({ avatorFileName, size }) => {
    var avatorSrc = './images/' + avatorFileName;

    return (
        <img src={avatorSrc} className={styles.avatorImg} data-size={size} />
    );
}

export default Avator;
