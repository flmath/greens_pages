import React from 'react';

const CvMain = React.lazy(() => import('./cv/CvMain'));
const PostList = React.lazy(() => import('./PostList'));
const PagesInterface = React.lazy(() => import('./PagesInterface'));


function PayloadBody(props)
{
window.scrollTo(0, 0)  
if(props.type===1){
  return(<div><CvMain></CvMain></div>)
}
else if(props.type===2){
  return(<div><PostList filterText = {props.filterText}
                        routeToPage = {props.routeToPage}>
              </PostList></div>)
}
else if(props.type===3){
  return(<div><PagesInterface href={props.href}></PagesInterface></div>)
}

}


export default PayloadBody;
