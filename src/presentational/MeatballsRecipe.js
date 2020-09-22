import React from 'react';
import Card from 'react-bootstrap/Card'

class MeatballsRecipe extends React.Component{
    render(){
        return(
            <div className = "mx-auto col-sm-6">
                <Card>
                    <Card.Header>
                    <Card.Title>Meatballs recipe</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <h2>Ingredients</h2>
                        <ul>
                            <li>2 eggs</li>
                            <li>5 dl milk</li>
                            <li>500g beef</li>
                        </ul>
                        <h2>Instructions</h2>
                        <ul>
                            <li>Mix all together in bowl</li>
                            <li>Cook in frying pan for 10 min</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        );
    }
};

export default MeatballsRecipe;