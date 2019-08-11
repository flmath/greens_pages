import React from 'react';
import {Container, ListGroup} from 'reactstrap';

import PostListRow from './PostListRow'

import {filterPostFun} from '../SupportFunctions'
import json_data from '../../../../postlist.json';

function PostList(props){
      const filtered_data = json_data.the_list.filter(filterPostFun(props.filterText));
      const RootEl = document.querySelector("#payload_body")
      if(RootEl) RootEl.scrollTo(0, 0)
      else console.log("Warning: #payload_body not found.")

      return (
        <div>

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
