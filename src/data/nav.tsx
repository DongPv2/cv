import React from "react";
import About from "../components/about/about";
import Article from "../components/article/article";
import Skill from "../components/skill/skill";

export interface INav {
  name: string;
  route: string;
  component: JSX.Element;
  children?: boolean;
}
export const DNav: INav[] = [
  {
    name: "Bài viết",
    route: "/",
    component: <Article />,
  },
  {
    name: "Giới thiệu",
    route: "about",
    component: <About />,
    children: true,
  },
  {
    name: "Kỹ năng",
    route: "skill",
    component: <Skill />,
  },
];
