import React, { Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";

import { BrowserRouter as Router } from "react-router-dom"
import MainFrame from './main_frame/MainFrame';


function MainFrameLazyWithRouter(props) {
    return (
      <div id="topdiv">
        <Suspense fallback={<div>Loading...</div>}>
          <Router basename={process.env.PUBLIC_URL}>
            <MainFrame></MainFrame>
        </Router>
        </Suspense>
      </div>
      );
  }

export default MainFrameLazyWithRouter;
