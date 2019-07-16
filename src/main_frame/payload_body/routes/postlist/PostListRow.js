import React from 'react';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { withRouter } from "react-router-dom"

class PostListRow extends React.Component{

    routeToPage(new_href){
        this.props.history.push("/display" + new_href)
      }

    render(){ 
      const title = this.props.title;
      const href = this.props.href;
      const tags = this.props.tags;

      return (
        <ListGroupItem className="my_postlist_item"
             onClick={() => this.routeToPage(href)}
        >
<ListGroupItemHeading className="my_postlist_head">{title}</ListGroupItemHeading>
    <ListGroupItemText className="my_postlist_text">Tags:  {tags.map( item => item + " " )}
    </ListGroupItemText></ListGroupItem>
    )
  }
}



export default withRouter(PostListRow);
