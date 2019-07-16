import React  from 'react';
import { withRouter} from "react-router-dom"
import { Table, Row, Col, Container } from 'reactstrap';
import { Card, CardTitle, CardText, CardHeader, CardBody} from 'reactstrap';
import { ListGroup, ListGroupItem} from 'reactstrap';


function Recipes(props) {

        return(
          <div>
          <div id="skip_absolute_header"><br /></div>
<Container fluid>
  <Row>
    <Col xs="12" >
      <Card>
      <CardHeader tag="h3">Banana Oat Pancakes</CardHeader>
  <Row>  <Col xs="3" ><CardBody>
        <CardText>
          <Table bordered hover >
                  <thead>
                    <tr><th>Ingredients:</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>2 fistfulls of oatmeals</td></tr>
                    <tr><td>2 eggs</td></tr>
                    <tr><td>A banana</td></tr>
                    <tr><td>Sunflower oil</td></tr>
                  </tbody>
                </Table>

          </CardText>
        </CardBody>
        </Col>
        <Col xs="9" >

        <CardBody>

              <CardText>

                <Table hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Instructions:</th>
                         </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Put oatmeals into a thermomix and grind them (15s/speed 10) to flour.</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Add 2 eggs and banana. Run the thermomix with speed 4-5 for 30s.</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Heat a little of sunflower oil on the frying pan. Fry the batter.</td>
                          </tr>
                        </tbody>
                      </Table>
              </CardText>
              </CardBody>
            </Col>
            </Row>
      </Card>
    </Col>
  </Row>



  </Container>
            </div>)}


export default withRouter(Recipes);
