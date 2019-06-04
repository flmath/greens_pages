import React from 'react';
import {Container, Jumbotron} from 'reactstrap';
import { withRouter} from "react-router-dom"
import {nextPayloadType} from '../../SupportFunctions'

class NoMatch extends React.Component {

  switchState() {
                    const theType = nextPayloadType(this.props.location.pathname)
                    this.props.history.push(theType)
                    }

render(){
      return (
        <div onClick={this.switchState.bind(this)}>
          <div id="skip_absolute_header"><br /></div>

          <Container className="my_postlist_container">
            <Jumbotron   id="empty_page">
              <h2 className="display-3">This page is designed to be empty. </h2>
            </Jumbotron>
          </Container>
        <Container className="my_postlist_container">
          <div id="empty_scroll"><br /></div>
        </Container>

       </div>
      );
    }
  }

export default withRouter(NoMatch);
