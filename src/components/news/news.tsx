import React, { useContext } from "react";
import { ContextGlobal } from "../../contexts/context-global";
import styles from "./news.module.scss";

export default function News() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.news}>
      <div className="head">
        <Avatar />
        <div>
          <div>name</div>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

function Avatar() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.avatar}>
      <div>
        <img src={people?.avatar} />
      </div>
    </div>
  );
}
