import React, { useState } from "react";
import { Link } from "react-router-dom";

import docsV1config from "../config/v1DocsConfig.json";
import v1ApiDocs from '../config/v1apiConfig.json'
import blogPostsConfig from "../config/blogPosts.json";

export function Header() {
  const [selectedVersion, setSelectedVersion] = useState("v1");

  function handleVersion(evt) {
    setSelectedVersion(evt.target.value);
  }

  return (
    <header className="Header">
      <h5> Welcome to Doczilla</h5>
      <div className="header-links">
        <Link to={`/docs/v1/${docsV1config.docs[0].slug}`}> Docs</Link>
        <Link to={`/api/v1/${v1ApiDocs.apiDocs[0].slug}`}> API</Link>
        <Link to={`/blog/${blogPostsConfig.posts[0].slug}`}> Blog</Link>
      </div>
      <div className="version-selection-div">
        <select onChange={handleVersion}>
          <option label="V1" value={"V1"}>
            V1
          </option>
          <option label="V2" value={"V2"}>
            V2
          </option>
        </select>
      </div>
    </header>
  );
}
