import React from "react";
import Contact from "../components/about/contact/contact";
import Detail from "../components/about/detail/detail";
import Education from "../components/about/education/education";
import Overview from "../components/about/overview/overview";
import { INav } from "./nav";
import { People } from "./people";

export const DNavAbout: INav[] = [
  {
    name: "Tổng quan",
    route: "overview",
    component: <Overview />,
  },
  {
    name: "Công việc và học vấn",
    route: "education",
    component: <Education />,
  },
  {
    name: "Thông tin liên hệ và cơ bản",
    route: "contact",
    component: <Contact />,
  },
  {
    name: `Chi tiết về ${People.nickname}`,
    route: "detail",
    component: <Detail />,
  },
];
