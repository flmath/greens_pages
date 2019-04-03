import React from 'react';

import {Container, Button, ButtonGroup} from 'reactstrap';
import json_data from './postlist.json';

function PostList(props){
      const filtered_data = json_data.the_list.filter(filterPostFun(props.filterText));
      const route_to_page = props.routeToPage
      return (
        <div>
        <div id="skip_absolute_header"><br /></div>
    <Container className="my_postlist_container">
      <ButtonGroup vertical block size="lg" className="my_postlist_button_group">
          <RenderPosts filteredData = {filtered_data}
                       routeToPage  = {route_to_page}
            ></RenderPosts>
      </ButtonGroup>
          <div id="empty_scroll_postlist"><br /></div>

        </Container>

        </div>
      );

  }

function RenderPosts(props){
const routeToPage = props.routeToPage
return (

props.filteredData.map((aPost, index)=>
{ return (
<PostListRow
            key   = {aPost.id}
            title = {aPost.title}
            href  = {aPost.href}
            routeToPage = {routeToPage} >
</PostListRow>

);}))}

function filterPostFun(filterText){
return function(aPost){
  let is_in_title = aPost.title.toLowerCase().indexOf(filterText.toLowerCase())!==-1;
  let is_in_tags  = aPost.tags.map(toLowerCaseFun).indexOf(filterText.toLowerCase())!==-1;

  return (is_in_title || is_in_tags)}

}

function toLowerCaseFun(str){
  return str.toLowerCase()
}


function PostListRow(props){

    const title = props.title;
    const href = props.href;
    return (
        <Button block className = "my_postlist_button"
             onClick={() => props.routeToPage(href)}
        >{title}</Button>
    )}



export default PostList;
