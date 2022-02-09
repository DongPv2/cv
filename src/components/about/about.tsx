import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { DNavAbout } from "../../data/about";
import styles from "./about.module.scss";

export default function About() {
  const nav = DNavAbout;
  return (
    <div className={styles.box}>
      <div>
        <div className={`box ${styles.about}`}>
          <div className={styles.left}>
            <div className={styles.title}>Giới thiệu</div>
            <ul>
              {nav.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${styles.active} text` : `text`
                    }
                    to={item.route}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Routes>
            {nav.map((item, index) => (
              <Route
                key={index}
                path={item.route}
                element={item.component}
              ></Route>
            ))}
            <Route path="*" element={<Navigate to="overview" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
