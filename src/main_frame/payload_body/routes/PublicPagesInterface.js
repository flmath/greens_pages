import React  from 'react';
import { withRouter} from "react-router-dom"
import json_data from '../../../postlist.json';
import NoMatch from './NoMatch';


function PublicPagesInterface(props) {

       const possible_hrefs = json_data.the_list.map((aPost, index)=> {return aPost.href.substring(1)})
       const href = props.match.params.href
       if(possible_hrefs.includes(href)){
        return(
          <div>
            <div id="skip_absolute_header"></div>
              <iframe id="iframe_routed" title="iframe_router_title"
                src={process.env.PUBLIC_URL + "/pages/" + href}></iframe>
            </div>)}
          else{
            return(
            <NoMatch></NoMatch>)
              }
}

export default withRouter(PublicPagesInterface);
