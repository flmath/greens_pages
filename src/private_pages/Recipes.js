import React from 'react';
import {withRouter} from "react-router-dom"
import {Container} from 'reactstrap';
import RecipeRow from './Recipes/RecipeRow.js';


function Recipes(props) {

        return(
          <div>
          <div className="skip_absolute_header"><br /></div>
          <Container fluid>
            <RecipeRow header="Banana Oat Pancakes"
              ingredients = {["2 fistfulls of oatmeals", "2 eggs", "A banana", "Sunflower oil"]}
              instructions = {["Put oatmeals into a thermomix and grind them (15s/speed 10) to flour.",
                "Add 2 eggs and banana. Run the thermomix with speed 4-5 for 30s.",
                "Heat a little of sunflower oil on the frying pan. Fry the batter."]} >
            </RecipeRow>
          </Container>
          </div>)}


export default withRouter(Recipes);
