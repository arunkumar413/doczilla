import React from "react";
import { Header } from "../commonComponents/Header.jsx";
import { BlogSideBar } from "./BlogSideBar.jsx";
import { BlogMain } from "./BlogMain.jsx";

export function BlogLayout() {
  return (
    <div className="BlogLayout">
      <Header/>
      <BlogSideBar />
      <BlogMain/>
    </div>
  );
}
