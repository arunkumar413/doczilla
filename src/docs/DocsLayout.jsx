import React from "react";
import { Header } from "../commonComponents/Header.jsx";
import { DocsSideBar } from "./DocsSideBar.jsx";
import { DocsFooter } from "./DocsFooter.jsx";
import { DocsMain } from "./DocsMain.jsx";

export function DocsLayout() {
  return (
    <div className="DocsLayout">
      <Header />
      <DocsSideBar/>
      <DocsMain/>
      <DocsFooter/>
    </div>
  );
}
