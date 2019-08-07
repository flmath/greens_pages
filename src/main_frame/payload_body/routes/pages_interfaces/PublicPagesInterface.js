import React  from 'react';
import { withRouter} from "react-router-dom"


function PublicPagesInterface(props) {

        return(
          <div>
                <iframe id="iframe_routed" title="iframe_router_title"
                src={process.env.PUBLIC_URL + "/pages/" +  props.postHref}></iframe>
            </div>)}


export default withRouter(PublicPagesInterface);
