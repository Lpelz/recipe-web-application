import React from 'react';
import Card from 'react-bootstrap/Card'

class Home extends React.Component{
    render(){
        return(
            <div className = "mx-auto col-sm-6">
                <Card>
                    <Card.Header>
                    <Card.Title>Home</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <h1>Welcome</h1>
                    </Card.Body>
                </Card>       
            </div>
        );
    }
};

export default Home;