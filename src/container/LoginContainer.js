import React from 'react';
import axios from 'axios';
import Login from '../presentational/Login';
import {Redirect} from 'react-router-dom';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    login = async e =>{  
        const user = {
            username:this.state.username,
            password:this.state.password,
        }
        const re = await axios.post('http://localhost:8080/login', user);  
        if(re.data){
            const {appUpdateState} = this.props;
            appUpdateState("username", this.state.username);
        }
        else{
            alert("Invalid username or password");
        }
    }

    inputChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        if(sessionStorage.getItem('username') !== null){
            return (<Redirect to="/"/>);
        }
        return(
            <Login login = {this.login} inputChange = {this.inputChange}/>
        );
    }
};

export default LoginContainer;