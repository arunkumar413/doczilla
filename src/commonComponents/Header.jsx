import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [selectedVersion, setSelectedVersion] = useState("v1");

  function handleVersion(evt) {
    setSelectedVersion(evt.target.value);
  }

  return (
    <header className="Header">
      <h5> Welcome to Doczilla</h5>
      <div className="header-links">
          <Link to="/docs"> Docs</Link>
          <Link to="/api"> API</Link>
          <Link to="/blog"> Blog</Link>
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
