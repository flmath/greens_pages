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
          <br/>

          <Container fluid>
            <RecipeRow header="Zucchini Crumpet"
              ingredients = {["A small onion", "A clove of garlic", "Olive oil",
                 "A zuccini", "A teaspoon of bouillon powder", "50g of cream cheese"]}
              instructions = {["Put the onion, garlic into a thermomix and blend them (15s/speed 5).",
                  "Add oil. Run the thermomix with on Varoma speed 1 for 2 minutes.",
                "Clean the zucchini and cut zucchini (do not remove the skin). "+
                 "Add to Thermomix: zuccini and water in 1:1 proportions (weightwise) and bouillon. "+
                 "Run the thermomix with speed 4, temperature 100&deg;C for 15 minutes.",
                 "Run the thermomix increamentally speed 4, 5, 6, 7, 8 for 30 seconds each.",
                 "Add the cream cheese to Thermomix with speed 4, for 10 seconds."
                ]}
            note = {"NOTE: Prefered cream cheese of my wife: "+
                    "<a href='http://piatnica.com.pl/produkty/twoj-smak-naturalny-135-g'>"+
                    "Piatnica cream cheese.</a>"}
                 >
            </RecipeRow>
          </Container>

<div className="empty_scroll"><br /></div>







          </div>)}


export default withRouter(Recipes);
