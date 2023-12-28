import React from "react";
import v1ApiConfig from "../config/v1apiConfig.json";
import { Link } from "react-router-dom";

export function ApiSideBar() {
  const sideBarElements = v1ApiConfig.apiDocs.map(function (item, index) {
    return (
      <div key={index.toString()} className="sidebar-link-div">
        <Link  to={`/api/v1/${item.slug}`}>
          {" "}
          {item.title}{" "}
        </Link>
      </div>
    );
  });

  return (
    <aside className="ApiSideBar">
      <h3> API side bar</h3>
      {sideBarElements}
    </aside>
  );
}
