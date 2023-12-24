import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./commonComponents/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ AppRouter}/>);
