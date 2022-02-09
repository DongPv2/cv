import React, { useContext } from "react";
import { ContextGlobal } from "../../../contexts/context-global";
import { BaseInfomation } from "../../baseInformation/BaseInformation";
import styles from "./detail.module.scss";

export default function Detail() {
  const people = useContext(ContextGlobal).people;
  return (
    <div className={styles.detail}>
      <div>
        <div className={styles.title}>Giới thiệu về Đông</div>
        <div className={styles.items}>
          <BaseInfomation bigSize data={people?.intro}>
            <>
              {people?.intro?.value || (
                <strong className="text-gray">
                  Không có chi tiết nào khác để hiển thị
                </strong>
              )}
            </>
          </BaseInfomation>
        </div>
      </div>
      <div>
        <div className={styles.title}>Trích dẫn yêu thích</div>
        <div className={styles.items}>
          <BaseInfomation bigSize data={people?.quote}>
            <>
              {people?.quote?.value || (
                <strong className="text-gray">
                  Không có chi tiết nào khác để hiển thị
                </strong>
              )}
            </>
          </BaseInfomation>
        </div>
      </div>
    </div>
  );
}
