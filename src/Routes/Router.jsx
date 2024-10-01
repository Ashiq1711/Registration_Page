/* eslint-disable react/jsx-key */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Regestration from "../RegestrationPage/regestration";
import Home from "../Home/Home";


export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route>
     
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/regestration" element={<Regestration />} />
      </Route>
    </Route>,
  ])
);