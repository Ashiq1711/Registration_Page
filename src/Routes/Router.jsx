/* eslint-disable react/jsx-key */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Regestration from "../RegestrationPage/Regestration";
;


export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route>
     
      <Route>
   
        <Route path="/" element={<Regestration />} />
      </Route>
    </Route>,
  ])
);