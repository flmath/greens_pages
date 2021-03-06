import React  from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import PublicPagesInterface from "./PublicPagesInterface"
import json_data from '../../../../postlist.json';
import NoMatch from '../NoMatch';


function PagesInterface(props) {

  const checkPost = createCheckPost(props.match.params.href)
  const thePost = json_data.the_list.find(checkPost)

   if(thePost){
    if(thePost.is_address_public===true)
    {
      return(
        <PublicPagesInterface postHref={thePost.href.substring(1)}>
        </PublicPagesInterface>)
    }
    else
    {
      const ComponentPage = React.lazy(()=> import('../../../../private_pages'+thePost.href))
      return(
        <div>
          <Switch>
              <Route exact path="/display/:href"
            render={prop => <ComponentPage {...prop} />}
              />
          </Switch>
        </div>)
    }
    }
       else return(<NoMatch></NoMatch>)

}

function createCheckPost(href){

return function checkPost(aPost){
  return aPost.href.substring(1) === href
}}


export default withRouter(PagesInterface);
