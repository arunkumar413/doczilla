import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
// import v1ApiDocs from '../config/v1apiConfig.json'

import { Parser } from "html-to-react";
import markdownit from "markdown-it";

export function ApiMain() {
  const docName = useMatch("/api/v1/:docName").params.docName;
  const [selectedMarkDown, setMarkDown] = useState("");

  useEffect(
    function () {
      async function getDoc() {
        try {
          import(`./v1/${docName}.md`)
            .then((file) => file.default) // Get the Markdown content
            .then((markdownContent) => {
              setMarkDown(markdownContent);
            });
        } catch (err) {
          console.log(err);
        }
      }
      getDoc();
    },
    [docName]
  );
  const md = markdownit()
  const result = md.render(selectedMarkDown);
  const jsxParser = new Parser();
  const jsxElements = jsxParser.parse(result);

  return (
    <main className="ApiMain">
      <h3> API main</h3>
      {jsxElements}
    </main>
  );
}
