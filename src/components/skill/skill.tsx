import classNames from "classnames";
import React, { useContext } from "react";
import { ContextGlobal } from "../../contexts/context-global";
import styles from "./skill.module.scss";
export function ShortSkill() {
  
  const people = useContext(ContextGlobal)?.people;
  return (
    <>
      <div className="text f-17">{people?.skill.length} kỹ năng</div>
      <ul className={styles.skill}>
        {people?.skill.map((item, i) => {
          const lastItem = i == 7 && people?.skill.length > 8;
          return (
            i < 8 && (
              <li style={{ zIndex: people?.skill.length - i }} key={i}>
                <div className={classNames({ [styles.lastItem]: lastItem })}>
                  {lastItem && (
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <circle cx="12" cy="12" r="2.5"></circle>
                      <circle cx="19.5" cy="12" r="2.5"></circle>
                      <circle cx="4.5" cy="12" r="2.5"></circle>
                    </svg>
                  )}
                  <img src={item.logo} />
                </div>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
}

export default function Skill() {
  return <div>Skill</div>;
}
