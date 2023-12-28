import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import blogConfig from "../config/blogPosts.json";

export function BlogHome() {
    const navigate = useNavigate();

  useEffect(function () {
    navigate(`/blog/${blogConfig.posts[1].slug}`);
  },[]);
  return <div className="BlogHome"></div>;
}
