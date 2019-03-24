import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import json_data from './postlist.json';

class PostList extends React.Component {
  constructor(props){
    super(props)
   const filterText = this.props.filterText;
  }

  filterJson(){
  return json_data.the_list.map((aPost, index)=>
  { return (
    <p>{aPost.title}
    {filterByTags(aPost.tags)}</p>
  );});}




render(){

      const rows = [];


      return (

        <div>
        <hr />  <hr />  <hr />  <hr />  <hr />  <hr />  <hr />
        <h1 color='blue'> umm </h1>
        {this.filterJson()}



</div>
      );

  }}

function filterByTags(tags){
return (<div>
  {tags.map((aTag, index)=>{
  return (<div>{aTag}</div> )})}
  </div>)}

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
