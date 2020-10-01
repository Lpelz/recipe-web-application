import React from 'react';
import axios from 'axios';
import AddComment from '../presentational/AddComment';
import Comment from '../presentational/Comment';


class CommentsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[],
            commentText: ""
        };
    }

    componentDidMount(){
       this.getComments();
    }

    getComments = async e =>{
        const re = await axios.get('http://localhost:8080/comment', {params:{recipeName:this.props.recipeName}});  
        const comments = re.data;
        this.addCommentsToState(comments);
    }

    addCommentsToState = (comments) =>{
        this.setState({
            comments: comments
        });
    }

    addComment = async e =>{
        const comment = {
            user: {username :sessionStorage.getItem("username")},
            commentText:this.state.commentText,
            recipeName: this.props.recipeName
        }
        await axios.post('http://localhost:8080/comment', comment); 
        this.addCommentToState(comment);
    }
    
    addCommentToState = (comment) =>{
        this.setState({
            comments: this.state.comments.concat(comment)
        });
    }
    
    deleteComment = async(id) =>{
        await axios.delete('http://localhost:8080/comment', {params:{id:id}}); 
        this.deleteCommentFromState(id);
    }
    
    deleteCommentFromState = (id) =>{
        this.setState(state =>({
            comments: state.comments.filter(comment=> comment.id !== id)
        }));
    }


    inputChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    renderComments = () =>{
        const {comments} = this.state;
        return comments.map(comment =>{
            if(sessionStorage.getItem("username") === comment.user.username){
                return (<Comment username = {comment.user.username} commentText = {comment.commentText} deletable = {true} key = {comment.id} id = {comment.id} deleteComment = {this.deleteComment}/>);
            }
            else{
                return (<Comment username = {comment.user.username} commentText = {comment.commentText} key = {comment.id}/>);
            }
        });
    }

    render(){
        return(
            <div className = "mx-auto col-sm-6">
                <h1>Comments</h1>
                {this.renderComments()}
                {sessionStorage.getItem("username") && <AddComment addComment = {this.addComment} inputChange = {this.inputChange}/>}
            </div>
        );
    }
};

export default CommentsContainer;