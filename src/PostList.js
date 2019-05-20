import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {Container} from 'reactstrap';
import json_data from './postlist.json';

function PostList(props){
      const filtered_data = json_data.the_list.filter(filterPostFun(props.filterText));
      const route_to_page = props.routeToPage
      window.scrollTo(0, 0)
      return (
        <div>
        <div id="skip_absolute_header"><br /></div>
    <Container className="my_postlist_container">
      <ListGroup size="lg" className="my_postlist_button_group">
          <RenderPosts filteredData = {filtered_data}
                       routeToPage  = {route_to_page}
            ></RenderPosts>
      </ListGroup>
      <div id="empty_scroll_postlist"><br /></div>
        </Container>
        <div id="empty_scroll"><br /></div>
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
            tags  = {aPost.tags}
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
    const tags = props.tags;

    return (
        <ListGroupItem className="my_postlist_item"
             onClick={() => props.routeToPage(href)}
        >
<ListGroupItemHeading className="my_postlist_head">{title}</ListGroupItemHeading>
    <ListGroupItemText className="my_postlist_text">Tags:  {tags.map( item => item + " " )} </ListGroupItemText></ListGroupItem>
    )}


export default PostList;
