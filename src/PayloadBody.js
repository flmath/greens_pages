import React from 'react';

import {Route, Switch, withRouter} from "react-router-dom"
import CvMain from './cv/CvMain';
import PostList  from './PostList';
import PagesInterface from './PagesInterface';
import NoMatch from './NoMatch';
function PayloadBody(props)
{

return(
<div>
  <Switch>
  <Route exact path="/" render={(prop) => <PostList {...prop}
    filterText = {props.filterText} routeToPage = {props.routeToPage} />}
        />
  <Route path="/cv"  render={props => <CvMain {...props} />}
        />
      <Route path="/display/:href"
    render={prop => <PagesInterface {...prop} />}
      />
    <Route render={prop => <NoMatch {...prop} handleStateChange = {props.handleStateChange}/> } />
  </Switch>
</div>)
}
export default withRouter(PayloadBody);
