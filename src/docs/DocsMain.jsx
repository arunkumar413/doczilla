import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import v1DocsConfig from "../config/v1DocsConfig.json";
import test1 from "./v1/test.md";
import {
  fetchAndConvertMarkdown,
  loadMarkdownFile,
  parseMarkdown,
} from "../utils";
import { Parser } from "html-to-react";
import markdownit from "markdown-it";

export function DocsMain() {
  const docName = useMatch("/docs/v1/:docName").params.docName;
  const [selectedMarkDown, setMarkDown] = useState("");

  const elements = v1DocsConfig.docs.map(function (item, index) {
    return (
      <div>
        <h3> {item.title}</h3>
      </div>
    );
  });

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
    <main className="DocsMain">
      <h3> Docs main</h3>
      {jsxElements}
    </main>
  );
}
