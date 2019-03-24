import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import json_data from './postlist.json';

class PostList extends React.Component {
  constructor(props){
    super(props)
   const filterText = this.props.filterText;
  }





render(){

      const rows = [];


      return (

        <div>
        <hr />  <hr />  <hr />  <hr />  <hr />  <hr />  <hr />
        <h1 color='blue'> umm </h1>
        {filterPosts()}
</div>
      );

  }}

function filterPosts(){
  let filtered_data = json_data.the_list.filter(filterPostFun)
return (
filtered_data.map((aPost, index)=>
{ return (
  <p>{aPost.title}</p>

);}))}

function filterPostFun(filterText){
return function(aPost){
  let is_in_title = aPost.title.toLowerCase().indexOf(filterText.toLowerCase())!==-1;
  let is_in_tags = aPost.tags.map(toLowerCaseFun).indexOf(filterText.toLowerCase())!==-1;

  return (is_in_title || is_in_tags)}

}

function toLowerCaseFun(str){
  return str.toLowerCase()
}


class PostListRow extends React.Component {
  render() {

    return (
      <Row>
        <Col>name</Col>
        <Col>href</Col>
      </Row>
    );
  }
}


export default PostList;
