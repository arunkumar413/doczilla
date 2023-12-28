import React from "react";
import blogPostsConfig from "../config/blogPosts.json";
import { Link } from "react-router-dom";

export function BlogSideBar() {
  let sideBarElements = blogPostsConfig.posts.map(function (item, index) {
    return (
      <div key={index.toString()} className="sidebar-link-div">
        <Link to={`/blog/${item.slug}`}> {item.title} </Link>
      </div>
    );
  });

  return (
    <div className="BlogSideBar">
      <h3> Blog Side bar</h3>
      {sideBarElements}
    </div>
  );
}
