import React  from 'react';
import json_data from './postlist.json';


function PagesInterface(props) {
       const href = props.href

        return(
          <div>
              <iframe id="iframe_routed"
                src={process.env.PUBLIC_URL + href}></iframe>
            </div>)

        }



export default PagesInterface;
