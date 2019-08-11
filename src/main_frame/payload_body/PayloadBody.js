import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom"

const CvMain = React.lazy(() => import('./routes/cv/CvMain'))
const PostList = React.lazy(() => import('./routes/postlist/PostList'))
const PagesInterface = React.lazy(() => import('./routes/pages_interfaces/PagesInterface'))
const NoMatch = React.lazy(() => import('./routes/NoMatch'))

function PayloadBody(props){
return(
<div id="payload_body">
  <Switch>
  <Route exact path="/" render={(prop) => <PostList {...prop}
    filterText = {props.filterText} />}
        />
      <Route exact path="/cv"   render={(props) => <CvMain {...props} />}
              />
      <Route exact path="/display/:href"
        render={prop => <PagesInterface {...prop} />}
      />
    <Route render={prop => <NoMatch {...prop}/> } />
  </Switch>
</div>)
}
export default withRouter(PayloadBody);
