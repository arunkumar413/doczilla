import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Navigate } from "react-router-dom";

import {
  createBrowserRouter,
  Link,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { DocsApp } from "../docs/DocsApp.jsx";
import { BlogApp } from "../blog/BlogApp.jsx";
import { BlogHome } from "../blog/BlogHome.jsx";
import { ApiApp } from "../api/ApiApp.jsx";
import { Home } from "./Home.jsx";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    // element: <Link to="/docs/v1/test"> Test</Link>,
    element:<Home/>
  },
  {
    path: "/docs/v1/:docName",
    element: <DocsApp />,
  },
  {
    path: "/blog",
    element: <BlogHome />,
  },
  {
    path: "/api/v1/:docName",
    element: <ApiApp />,
  },
  {
    path: "/blog/:blogName",
    element: <BlogApp />,
  },
]);
