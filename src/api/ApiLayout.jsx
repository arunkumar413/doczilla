import React from "react";
import { Header } from "../commonComponents/Header.jsx";
import { ApiSideBar } from "./ApiSideBar.jsx";
import { ApiMain } from "./ApiMain.jsx";
import { ApiFooter } from "./ApiFooter.jsx";

export function ApiLayout() {
  return (
    <div className="ApiLayout">
      <Header />
      <ApiSideBar />

      <ApiMain />
      <ApiFooter />
    </div>
  );
}
