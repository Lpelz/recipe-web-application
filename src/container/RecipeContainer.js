import React from 'react';
import MeatballsRecipe from '../presentational/MeatballsRecipe';
import PancakesRecipe from '../presentational/PancakesRecipe';
import CommentsContainer from './CommentsContainer';


class RecipeContainer extends React.Component{

    render(){
        if(this.props.recipeName === "meatballs"){
            return(
                <div>
                    <MeatballsRecipe/>
                    <CommentsContainer recipeName = {"meatballs"}/>
                </div>
            );
        }
        else if(this.props.recipeName === "pancakes"){
            return(
                <div>
                    <PancakesRecipe/>
                    <CommentsContainer recipeName = {"pancakes"}/>
                </div>
            );
        }
    }
};

export default RecipeContainer;