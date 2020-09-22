import React from 'react';
import MeatballsRecipe from '../presentational/MeatballsRecipe';
import PancakesRecipe from '../presentational/PancakesRecipe';
import Comments from './Comments';


class Recipe extends React.Component{

    render(){
        if(this.props.recipeName === "meatballs"){
            return(
                <div>
                    <MeatballsRecipe/>
                    <Comments recipeName = {"meatballs"}/>
                </div>
            );
        }
        else if(this.props.recipeName === "pancakes"){
            return(
                <div>
                    <PancakesRecipe/>
                    <Comments recipeName = {"pancakes"}/>
                </div>
            );
        }
    }
};

export default Recipe;