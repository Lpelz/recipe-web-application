import React from 'react';
import Card from 'react-bootstrap/Card'

class PancakesRecipe extends React.Component{
    render(){
        return(
            <div className = "mx-auto col-sm-6">
                <Card>
                    <Card.Header>
                    <Card.Title>Pancakes Recipe</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <h2>Ingredients</h2>
                        <ul>
                            <li>3 eggs</li>
                            <li>3 dl milk</li>
                            <li>100g flour</li>
                        </ul>
                    <h2>Instructions</h2>
                    <ul>
                        <li>Put into bowl and mix</li>
                        <li>Cook the mix in frying pan for 5 min</li>
                    </ul>   
                </Card.Body>
                </Card>
            </div>
        );
    }
};

export default PancakesRecipe;