import React, { useContext } from "react";
import { ContextGlobal } from "../../../contexts/context-global";
import { formatDate } from "../../../util/util";
import { Event } from "../../baseInformation/BaseInformation";
import styles from "./education.module.scss";
export default function Education() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.education}>
      <div>
        <div className={styles.title}>Công việc</div>
        {people?.workplace?.map((item, i) => (
          <Event
            key={i}
            logo
            showYear={
              <small>
                {formatDate(item.from, "DMY")} -{" "}
                {item.to ? formatDate(item.to, "year") : "Hiện tại"}{" "}
                {item.location && (
                  <span className={styles.dot}>{item.location}</span>
                )}
              </small>
            }
            data={item}
          />
        ))}
      </div>
      <div>
        <div className={styles.title}>Đại học</div>
        {people?.universtity?.map((item, i) => (
          <Event
            key={i}
            logo
            showYear={
              <small>
                {formatDate(item.from, "DMY")} -{" "}
                {item.to ? formatDate(item.to, "year") : "Hiện tại"}{" "}
                {item.location && (
                  <span className={styles.dot}>{item.location}</span>
                )}
              </small>
            }
            textFirst="Học"
            data={item}
          />
        ))}
      </div>
    </div>
  );
}
