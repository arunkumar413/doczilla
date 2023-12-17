
import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { DocsApp } from "../docs/DocsApp.jsx";
import { BlogApp } from "../blog/posts/BlogApp.jsx";

export const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<Link to="/docs/v1/test-doc"> Test</Link>
  },
  {
    path: "/docs/v1/:docName",
    element: <DocsApp/>,

  },
  {
    path:'/blog/:blog-name',
    element:<BlogApp/>,


  }
]);