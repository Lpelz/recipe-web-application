import React from 'react';
import axios from 'axios';
import Registration from '../presentational/Registration'
import {Redirect} from 'react-router-dom';


class RegistrationContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            registered: false
        };
    }

    register = async e =>{
        e.preventDefault();
        const user = {
            username:this.state.username,
            password:this.state.password,
            email:this.state.email       
        }
        const re = await axios.post('http://localhost:8080/user', user);  
        if(re.data){
            this.setState({registered: true});
        }
        else{
            alert("invalid registration, username already taken");
        }
    }

    inputChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        if(this.state.registered){
            return (<Redirect to="/login"/>);
        }
        return(
            <Registration register = {this.register} inputChange = {this.inputChange}/>
        );    
    };
};

export default RegistrationContainer;