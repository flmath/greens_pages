import React  from 'react';

function PagesInterface(props) {
       const href = props.href
        return(
          <div>
            <div id="skip_absolute_header"></div>
              <iframe id="iframe_routed" title="iframe_router_title"
                src={process.env.PUBLIC_URL + href}></iframe>
            </div>)
        }


export default PagesInterface;
