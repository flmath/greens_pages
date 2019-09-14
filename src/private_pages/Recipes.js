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
            <RecipeRow header="Zucchini Soup"
              ingredients = {["A small onion", "A clove of garlic", "Olive oil",
                 "A zuccini", "A teaspoon of bouillon powder", "50g of cream cheese"]}
              instructions = {["Put the onion, garlic into a Thermomix and blend them (15s/speed 5).",
                  "Add oil. Run the thermomix with Varoma, speed 1 for 2 minutes.",
                "Clean and cut the zucchini (do not remove the skin). "+
                 "Add to thermomix: the zuccini and water in 1:1 proportions (weightwise) and bouillon. "+
                 "Run the thermomix with speed 4, temperature 100&deg;C for 15 minutes.",
                 "Run the thermomix increamentally speed 4, 5, 6, 7, 8 for 30 seconds each.",
                 "Add the cream cheese to Thermomix with speed 4, for 10 seconds."
                ]}
            note = {"NOTE: Prefered cream cheese: "+
                    "<a href='http://piatnica.com.pl/en/products/cream-cheeses'>"+
                    "Piatnica cream cheese.</a>"}
                 >
            </RecipeRow>
          </Container>
  <br/>
          <Container fluid>
            <RecipeRow header="Pasta with tomatos sauce"
              ingredients = {["A small onion", "A clove of garlic", "4 dried tomatos from oil",
                 "400g of tomato passata", "Pasta", "Parmeggiano"]}
              instructions = {["Put the onion, garlic and tomatos into a thermomix and stew them (Varoma/3 min/speed 1).",
                "Clean and cut the zucchini (do not remove the skin). ",
                 "Add the passata to thermomix and switch the thermomix to 100&deg;C, speed 5 for 5 minutes. ",
                 "Run the thermomix with speed 4, temperature 100&deg;C for 15 minutes.",
                 "Meanwhile make the pasta according to instruction on the package.",
                 "Mix the sauce, pasta and add parmeggiano."
                ]}
            note = {"NOTE: Prefered tomatos: "+
                    "<a href='http://wole-ole.pl/en/products/dried-tomatoes-in-oil-with-herbs/'>"+
                    "Dried Tomatoes	in Oil.</a>"}
                 >
            </RecipeRow>
          </Container>
  <br/>
          <Container fluid>
            <RecipeRow header="Soft boiled eggs"
              ingredients = {["2 eggs"]}
              instructions = {["Put eggs into basket, add 500g water, run thermomix (Varoma/10 min/speed 1)."
                ]}
            note = {"Reference: "+
                    "<a href='https://www.recipecommunity.com.au/basics-recipes/boiled-eggs/zw503db9-c84a8-765849-cfcd2-7dqmuw04'>"+
                    "Australian recipe community.</a>"}
                 >
            </RecipeRow>
          </Container>

<div className="empty_scroll"><br /></div>







          </div>)}


export default withRouter(Recipes);
