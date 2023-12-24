import React from "react";
import v1DocsConfig from "../config/v1DocsConfig.json";
import { Link } from "react-router-dom";

export function DocsSideBar() {
  const sideBarElements = v1DocsConfig.docs.map(function (item, index) {
    return (
      <div key={index.toString()} className="sidebar-link-div">
        <Link  to={`/docs/v1/${item.slug}`}>
          {" "}
          {item.title}{" "}
        </Link>
      </div>
    );
  });

  return (
    <aside className="DocsSideBar">
      <h3> Side Bar</h3>
      {sideBarElements}
    </aside>
  );
}
