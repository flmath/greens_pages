import React, { Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/theme.css";
import "./css/leaf.css";

import { BrowserRouter as Router } from "react-router-dom"
import MainFrame from './main_frame/MainFrame';
import {Spinner} from 'reactstrap'

function MainFrameLazyWithRouter(props) {
    return (
      <div id="topdiv">
        <Suspense fallback={<div style={{ width: '100%',  height: '100%',  position: 'fixed', left: '50%', top: '50%' }}>

          <Spinner color="primary" />



                    </div>}>
          <Router basename={process.env.PUBLIC_URL}>
            <MainFrame></MainFrame>
        </Router>
        </Suspense>
      </div>
      );
  }

export default MainFrameLazyWithRouter;
