import React from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddComment extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Header>
                    <Card.Title>Add Comment</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit = {this.props.addComment}>
                            <Form.Group controlId = "comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as = "textarea" name = "commentText" type = "string" onChange = {this.props.inputChange} required/>
                            </Form.Group>
                            <Button variant = "primary" type = "submit">Add Comment</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>  
        );
    }
};

export default AddComment;