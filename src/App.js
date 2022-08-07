import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import {
  UseState1,
  UseState2,
  UseEffect1,
  UseEffect2,
  UseEffect3,
} from "./topics";

export const App = () => (
  <>
    <div style={{ display: "flex" }}>
      <NavLink to="use-state-1">Use state example 1</NavLink>&nbsp;
      <NavLink to="use-state-2">Use state example 2</NavLink>&nbsp;
      <NavLink to="use-effect-1">Use effect example 1</NavLink>&nbsp;
      <NavLink to="use-effect-2">Use effect example 2</NavLink>&nbsp;
      <NavLink to="use-effect-3">Use effect example 3</NavLink>&nbsp;
    </div>
    {useRoutes([
      { path: "use-state-1", element: <UseState1 /> },
      { path: "use-state-2", element: <UseState2 /> },
      { path: "use-effect-1", element: <UseEffect1 /> },
      { path: "use-effect-2", element: <UseEffect2 /> },
      { path: "use-effect-3", element: <UseEffect3 /> },
    ])}
  </>
);
