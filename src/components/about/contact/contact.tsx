import React, { useContext } from "react";
import { ContextGlobal } from "../../../contexts/context-global";
import { formatDate } from "../../../util/util";
import { BaseInfomation } from "../../baseInformation/BaseInformation";
import styles from "./contact.module.scss";

export default function Contact() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.contact}>
      <div>
        <div className={styles.title}>Công việc</div>
        <div className={styles.items}>
          <BaseInfomation
            bigSize
            data={people?.phone}
            note={
              <small style={{ marginTop: 10, fontSize: 12 }}>Di động</small>
            }
          >
            <>{people?.phone?.value}</>
          </BaseInfomation>
          <BaseInfomation
            bigSize
            data={people?.email}
            note={<small style={{ marginTop: 10, fontSize: 12 }}>Email</small>}
          >
            <>{people?.email?.value}</>
          </BaseInfomation>
        </div>
      </div>
      <div>
        <div className={styles.title}>Các trang web và liên kết xã hội</div>
        <div className={styles.items}>
          {people?.website?.map((item, i) => (
            <BaseInfomation bigSize data={item} key={i}>
              <>
                {item?.value || (
                  <strong className="text-gray">
                    Không có liên kết để hiển thị
                  </strong>
                )}
              </>
            </BaseInfomation>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.title}>Thông tin cơ bản</div>
        <div className={styles.items}>
          <BaseInfomation
            bigSize
            data={people?.gender}
            note={
              <small style={{ marginTop: 10, fontSize: 12 }}>Giới tính</small>
            }
          >
            <>{people?.gender?.value}</>
          </BaseInfomation>
          <BaseInfomation bigSize data={people?.birthDay}>
            <div>
              <div style={{ marginBottom: 20 }}>
                <span>{formatDate(people?.birthDay?.value, "DM")}</span>
                <small style={{ marginTop: 10, fontSize: 12 }}>Ngày sinh</small>
              </div>
              <div>
                <span>{formatDate(people?.birthDay?.value, "YYYY")}</span>
                <small style={{ marginTop: 10, fontSize: 12 }}>Năm sinh</small>
              </div>
            </div>
          </BaseInfomation>
        </div>
      </div>
    </div>
  );
}
