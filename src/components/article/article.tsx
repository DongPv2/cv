import classNames from "classnames";
import React, { useContext } from "react";
import { ContextGlobal } from "../../contexts/context-global";
import { BaseInfomation, Event } from "../baseInformation/BaseInformation";
import styles from "./article.module.scss";
export default function Article() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.box}>
      <div>
        <div className={classNames("box", styles.left)}>
          <div className={styles.about}>
            <span className={styles.title}>Giới thiệu</span>
            <div>= Lười biếng + ngu dối</div>
          </div>
          <div className={styles.overview}>
            {people?.workplace?.map((item, i) => (
              <Event key={i} data={item} />
            ))}
            {people?.universtity?.map((item, i) => (
              <Event key={i} data={item} textFirst="Học" />
            ))}
            <BaseInfomation data={people?.liveIn}>
              <>
                Sống tại <strong>{people?.liveIn?.value}</strong>
              </>
            </BaseInfomation>
            <BaseInfomation data={people?.from}>
              <>
                Đến từ <strong>{people?.from?.value}</strong>
              </>
            </BaseInfomation>
            <BaseInfomation data={people?.maritalStatus}>
              <>{people?.maritalStatus?.value}</>
            </BaseInfomation>
          </div>
          <ul>
            <ol>
              <div>
                <span>🌏</span>
              </div>
              <strong>Du lịch</strong>
            </ol>
            <ol>
              <div>
                <span>📽</span>
              </div>
              <strong>Xem phim</strong>
            </ol>
            <ol>
              <div>
                <span>🎮</span>
              </div>
              <strong>Trò chơi điện tử</strong>
            </ol>
            <ol>
              <div>
                <span>🎧</span>
              </div>
              <strong>Nghe nhạc</strong>
            </ol>
          </ul>
        </div>
        <div className={classNames("box", styles.right)}>2</div>
      </div>
    </div>
  );
}
