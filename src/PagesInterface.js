import React  from 'react';
import { withRouter } from "react-router-dom"
function PagesInterface(props) {
       const href = props.match.params.href
        return(
          <div>
            <div id="skip_absolute_header"></div>
              <iframe id="iframe_routed" title="iframe_router_title"
                src={process.env.PUBLIC_URL + "/pages/" + href}></iframe>
            </div>)
        }


export default withRouter(PagesInterface);
