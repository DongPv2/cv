import React, { useContext } from "react";
import { ContextGlobal } from "../../../contexts/context-global";
import { formatDate } from "../../../util/util";
import { BaseInfomation, Event } from "../../baseInformation/BaseInformation";
import styles from "./overview.module.scss";

export default function Overview() {
  const people = useContext(ContextGlobal).people;

  return (
    <div className={styles.overview}>
      {people?.workplace?.map((item, i) => (
        <Event
          key={i}
          bigSize
          showYear={
            <small>
              {formatDate(item.from, "DMY")} đến{" "}
              {item.to ? formatDate(item.to, "DMY") : "nay"}
            </small>
          }
          data={item}
        />
      ))}
      {people?.universtity?.map((item, i) => (
        <Event
          key={i}
          bigSize
          showYear={
            <small>
              Niên Khóa {formatDate(item.from, "year")} -{" "}
              {formatDate(item.to, "year")}
            </small>
          }
          data={item}
          textFirst="Học"
        />
      ))}

      <BaseInfomation bigSize data={people?.liveIn}>
        <>
          Sống tại <strong>{people?.liveIn?.value}</strong>
        </>
      </BaseInfomation>
      <BaseInfomation bigSize data={people?.from}>
        <>
          Đến từ <strong>{people?.from?.value}</strong>
        </>
      </BaseInfomation>
      <BaseInfomation bigSize data={people?.maritalStatus}>
        <>{people?.maritalStatus?.value}</>
      </BaseInfomation>
      <BaseInfomation
        bigSize
        data={people?.phone}
        note={<small>Di động</small>}
      >
        <>{people?.phone?.value}</>
      </BaseInfomation>
    </div>
  );
}
