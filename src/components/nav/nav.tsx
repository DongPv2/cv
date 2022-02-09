import React from "react";
import { NavLink } from "react-router-dom";
import { DNav } from "../../data/nav";
import styles from "./nav.module.scss";
export default function Nav() {
  const menu = DNav;

  return (
    <div className="container">
      <div className={styles.nav}>
        {menu.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.item} ${styles.active} text`
                : `${styles.item} text`
            }
            key={index}
            to={item.route}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
