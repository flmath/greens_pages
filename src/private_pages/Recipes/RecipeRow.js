import React  from 'react';
import { Table, Row, Col} from 'reactstrap';
import { Card, CardHeader, CardBody} from 'reactstrap';

function RecipeRow(props) {
  const ingredientList = props.ingredients.map((ingredient, index) =>  <tr key= {index}><td>{ingredient}</td></tr>)
  const instructionList = props.instructions.map((instruction, index) =>
        <tr key={index}>
            <th scope="row">{(index+1).toString()}</th>
            <td>{instruction} </td>
        </tr>)

        return(
          <div>
  <Row>
    <Col xs="12" >
      <Card>
      <CardHeader tag="h3">{props.header}</CardHeader>
  <Row>  <Col xs="12" md="3" ><CardBody>
          <Table bordered hover >
                  <thead>
                    <tr><th>Ingredients:</th></tr>
                  </thead>
                  <tbody>
                    {ingredientList}
                  </tbody>
                </Table>


        </CardBody>
        </Col>
        <Col xs="12" md="9" >
        <CardBody>
                <Table hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Instructions:</th>
                         </tr>
                        </thead>
                        <tbody>
                        {instructionList}
                        </tbody>
                      </Table>
              </CardBody>
            </Col>
            </Row>
      </Card>
    </Col>
  </Row>
            </div>)}


export default RecipeRow;
