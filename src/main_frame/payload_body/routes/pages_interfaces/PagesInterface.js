import React  from 'react';
import { withRouter} from "react-router-dom"
import PublicPagesInterface from "./PublicPagesInterface"
import json_data from '../../../../postlist.json';
import NoMatch from '../NoMatch';


function PagesInterface(props) {

  const checkPost = createCheckPost(props.match.params.href)
  const thePost = json_data.the_list.find(checkPost)

   if(thePost){
            return(
            <PublicPagesInterface postHref={thePost.href.substring(1)}></PublicPagesInterface>)

}          else{
            return(
            <NoMatch></NoMatch>)
              }
}

function createCheckPost(href){

return function checkPost(aPost){
  return aPost.href.substring(1) === href
}}


export default withRouter(PagesInterface);
