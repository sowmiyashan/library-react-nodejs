import React from 'react';
import './login.css';
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { Redirect } from 'react-router-dom';


class LoginComponent extends React.Component{

    constructor(props){
		super(props);
		this.state ={
            username:'',
            password:'',
            loggedIn:false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleSubmit(event){
        console.log(this.state);
        Axios.post("http://localhost:3001/login",this.state)
            .then(res => {
                if(res.data==="Login Successful")
                    this.setState({loggedIn: !this.state.loggedIn });
                else
                    alert(res.data);
            })
        event.preventDefault();
    }
    
    render(){
        if(this.state.loggedIn)
            return(
                <Redirect to="/home" />
            );
        return(
            <div >
                <img src="assets/Public-libraries-in-Dubai-Cover-15-10.jpg" className="bg-img"/>
                <div className="row_header_buttons">
                    <NavLink className="header_button" to="/" >HOME</NavLink>
                    <NavLink className="header_button" to="/">ABOUT US</NavLink>
                    <NavLink className="header_button" to="/">GALLERY</NavLink>
                    <NavLink className="header_button" to="/">LOGIN</NavLink>
                </div>
                <div className="bg-img">
                    <p  className="title-h"><b>THE LIBRARY</b></p>
                    <form class="container-l" onSubmit={this.handleSubmit}>
                        <h1>Login</h1>

                        <label for="Reg_no"><b>Username</b></label>
                        <input type="text" placeholder="Enter Register Number" name="username" required 
                            onChange={this.handleInputChange} value={this.state.username}
                        />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required 
                            onChange={this.handleInputChange} value={this.state.password}
                        />

                        <button type="submit" class="btn-l">Login</button>
                    </form>
                </div>
            </div>
        );

    }
}

export default LoginComponent;