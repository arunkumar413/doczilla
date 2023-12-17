import React from "react";
import { useMatch } from "react-router-dom";
import v1DocsConfig from "../config/v1DocsConfig.json"
import test1 from './v1/test.md'
import ReactMarkdown from 'react-markdown';



export function DocsMain() {
  const docName = useMatch("/docs/v1/:docName").params.docName;


  console.log(typeof(test1))
  const markdown = '#### Hi, *Pluto*!'
  const elements=  v1DocsConfig.docs.map(function(item,index){

    return(
      <div>

        <h3> {item.title}</h3>
      </div>
    )
  })
  

  return (
    <main className="DocsMain">
      <h3> Docs main</h3>
      {/* <ReactMarkdown> {markdown} </ReactMarkdown> */}
    </main>
  );
}
