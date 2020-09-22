import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Comment extends React.Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Header>
                        <Card.Title>{this.props.username}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    {this.props.commentText}
                    </Card.Body>
                </Card>
                {this.props.deletable && <Button onClick = {()=>{this.props.deleteComment(this.props.id)}}>Delete Comment</Button>}
            </div>
        );
    }
};

export default Comment;