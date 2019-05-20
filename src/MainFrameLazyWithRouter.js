import React, { Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";

import { BrowserRouter as Router } from "react-router-dom"
import MainFrame from './MainFrame';


function MainFrameLazyWithRouter(props) {
    return (
      <div id="topdiv">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <MainFrame></MainFrame>
        </Router>
        </Suspense>
      </div>
      );
  }


export default MainFrameLazyWithRouter;
