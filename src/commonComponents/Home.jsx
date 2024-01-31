import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="HomePage"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent:"center",
        height:'100vh'
      }}
    >
      <h2> Welcome to Doczilla</h2>
      <p> A simple documentation tool powered by Reactjs and Markdown</p>
      <Link style={{width:200}} className="ser-btn-primary-small" to="/docs/v1/test"> Go to docs</Link>
    </div>
  );
}
