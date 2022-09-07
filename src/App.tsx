import React, { useContext, useState } from "react";
import styles from "./App.module.scss";
import classNames from "classnames";
import { ShortSkill } from "./components/skill/skill";
import Button from "./components/button/button";
import Nav from "./components/nav/nav";
import { Navigate, Route, Routes } from "react-router-dom";

import { DNav } from "./data/nav";
import { ContextGlobal } from "./contexts/context-global";

interface IABC {}

export default function App() {
  const nav = DNav;
  const people = useContext(ContextGlobal)?.people;

  const [show, setShow] = useState(false);

  return (
    // <div>
    //   <div className={styles.header}>
    //     <div
    //       className={styles.head}
    //       style={{
    //         background: `url(${people?.background}) 50% -130px / cover no-repeat`,
    //       }}
    //     ></div>
    //     <div className={classNames(styles.boxFnfo, "container")}>
    //       <div className={styles.avt}>
    //         <div className={styles.boxAvt}>
    //           <img src={people?.avatar} />
    //         </div>
    //       </div>
    //       <div style={{ width: 174 }}></div>
    //       <div className={styles.name}>
    //         <h1>{people?.name}</h1>
    //         <ShortSkill />
    //       </div>
    //       <div className={styles.contact}>
    //         <Button color="gray">
    //           <img
    //             style={{ filter: "brightness(0.5)" }}
    //             src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/lzvufuLgbzd.png"
    //           />
    //           Gọi điện
    //         </Button>
    //         <Button>
    //           <img
    //             style={{ filter: "invert(100%)" }}
    //             src="https://www.facebook.com/rsrc.php/v3/yg/r/111xWLHJ_6m.png"
    //           />
    //           Nhắn tin
    //         </Button>
    //       </div>
    //     </div>
    //     <Nav />
    //   </div>
    //   <Routes>
    //     {nav.map((item, index) => (
    //       <Route
    //         key={index}
    //         path={`${item.route}${item.children ? "/*" : ""}`}
    //         element={item.component}
    //       />
    //     ))}
    //     <Route path="*" element={<Navigate to="" />}></Route>
    //   </Routes>
    // </div>

    <div className={styles.test}>
      {!show && <button onClick={() => setShow(true)}>Click vào đây</button>}
      {show && <div>Đừng có mà dỗi nữa</div>}
    </div>
  );
}
