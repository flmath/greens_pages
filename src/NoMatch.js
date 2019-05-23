import React from 'react';
import {Container,Jumbotron, Button} from 'reactstrap';
import MySky from './pics/impossible.svg';

function NoMatch(props){

      return (


        <div >
<div id="skip_absolute_header"><br /></div>
          <Container >
            <Jumbotron fluid onClick={props.handleStateChange} id="empty_page">
              <Button color="primary" size="lg" block onClick={props.handleStateChange}>Click to go to start page.</Button>
              <br /><br />
              <h3 className="display-4">This page is designed to be empty. </h3>
              <br /><br />
              <Button color="primary" size="lg" block onClick={props.handleStateChange}>Click to go to start page.</Button>
              <br /><br />
              <h3 className="display-4"> or look at this beautiful Penrose triangle.</h3>
                <img src={MySky} alt="A page designed to be empty"
                  />
     </Jumbotron>



        </Container>

       </div>
      );
    }



export default NoMatch;
