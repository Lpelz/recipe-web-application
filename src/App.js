import React, {Component} from 'react';
import Registration from './container/Registration'
import Login from './container/Login'
import Recipe from './container/Recipe'
import Home from './presentational/Home'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: sessionStorage.getItem("username")
    };
  }

  appUpdateState = (n, v) =>{
    this.setState({[n]: v});
    sessionStorage.setItem(n,v);
  }
  
  render(){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav.Link href='/meatballs'>Meatballs recipe</Nav.Link>
          <Nav.Link href="/pancakes">Pancakes recipe</Nav.Link>
            <Nav>
            {this.state.username && this.renderLogoutButton()}
            {!this.state.username && this.renderNotLoggedInLinks()}
            </Nav>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/registration" render = {props => <Registration/>}/>  
            <Route exact path="/login" render = {props => <Login appUpdateState = {this.appUpdateState}/>}/>  
            <Route exact path="/" render = {props => <Home/>}/>  
            <Route exact path="/meatballs" render = {props => <Recipe recipeName = "meatballs"/>}/>  
            <Route exact path="/pancakes" render = {props => <Recipe recipeName = "pancakes"/>}/>  
          </Switch>
        </Router>
      </div>
    );
  }

  
  renderLogoutButton(){
    return (<Button onClick ={() =>(this.appUpdateState("username", null), sessionStorage.clear())}>Logout</Button>);
  }
  renderNotLoggedInLinks(){
    return(
      <React.Fragment>
          <Nav.Link href='/login'>Login</Nav.Link>
          <Nav.Link href="/registration">Registration</Nav.Link>
      </React.Fragment>
    );
  }
}


export default App;
