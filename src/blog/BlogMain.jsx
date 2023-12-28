import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { Parser } from "html-to-react";
import markdownit from "markdown-it";

import testPost from "./posts/first-post.md";
export function BlogMain() {
  const blogName = useMatch("/blog/:blogName").params.blogName;
  const [selectedMarkDown, setMarkDown] = useState("");

  useEffect(
    function () {
      async function getDoc() {
        try {
          import(`./posts/${blogName}.md`)
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
    [blogName]
  );

  const md = markdownit();
  const result = md.render(selectedMarkDown);
  const jsxParser = new Parser();
  const jsxElements = jsxParser.parse(result);

  return (
    <div className="BlogMain">
      <h2> Blog main </h2>
      {jsxElements}
    </div>
  );
}
