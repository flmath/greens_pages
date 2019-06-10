import React from 'react';
import {Container, ListGroup} from 'reactstrap';
import PostListRow from './PostListRow'

import {filterPostFun} from './SupportFunctions'
import json_data from '../../../postlist.json';

function PostList(props){
      const filtered_data = json_data.the_list.filter(filterPostFun(props.filterText));
      window.scrollTo(0, 0)
      return (
        <div>
        <div id="skip_absolute_header"><br /></div>
    <Container className="my_postlist_container">
      <ListGroup size="lg" className="my_postlist_button_group">
          <RenderPosts filteredData = {filtered_data}
            ></RenderPosts>
      </ListGroup>
      <div id="empty_scroll_postlist"></div>
        </Container>
    <br />
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
            tags  = {aPost.tags} >
</PostListRow>
);}))}

export default PostList;
