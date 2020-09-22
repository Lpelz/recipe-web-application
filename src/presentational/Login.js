import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component{
    render(){
        return(
        <div className = "mx-auto col-sm-6">
            <Card>
                <Card.Header>
                <Card.Title>Login</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit = {this.props.login}>
                        <Form.Group controlId = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name = "username" type = "username" onChange = {this.props.inputChange} required/>
                        </Form.Group>
                        <Form.Group controlId = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name = "password" type = "password" onChange = {this.props.inputChange} required/>
                        </Form.Group>
                        <Button variant = "primary" type = "submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>  
        );
    }
};

export default Login;