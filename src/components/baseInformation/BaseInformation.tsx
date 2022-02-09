import React from "react";
import { IObjectPrivate, IEvent } from "../../data/people";
import styles from "./baseInformation.module.scss";
interface Props {
  data?: IObjectPrivate;
  children: JSX.Element;
  bigSize?: boolean;
  note?: JSX.Element;
}
export function BaseInfomation(props: Props) {
  const { data, children, bigSize, note } = props;
  return data?.hide ? (
    <></>
  ) : (
    <div className={styles.info}>
      <div className={styles.icon}>
        <img src={bigSize ? data?.icon2 : data?.icon} />
      </div>
      <div>
        <span>{children}</span>
        {note}
      </div>
    </div>
  );
}

interface EventProps {
  data?: IEvent;
  showYear?: JSX.Element;
  bigSize?: boolean;
  noData?: string;
  textFirst?: string;
  logo?: boolean;
}

export const Event = (props: EventProps) => {
  const { data, showYear, bigSize, noData, textFirst, logo } = props;

  return data?.hide ? (
    <></>
  ) : (
    <div className={styles.info}>
      {logo ? (
        <div className={styles.logo}>
          <div>
            <img src={data?.logo} />
          </div>
        </div>
      ) : (
        <div className={styles.icon}>
          <img src={bigSize ? data?.icon2 : data?.icon} />
        </div>
      )}
      {data?.school ? (
        <div>
          <span>
            {textFirst} {data?.study} tại <strong>{data?.school}</strong>
          </span>
          {showYear}
        </div>
      ) : (
        <span className="text-gray">{noData || ""}</span>
      )}
    </div>
  );
};
