import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom'
import './home.css';

class HomeComponent extends React.Component{

    constructor(props){
		super(props);
		this.state ={
            name:'',
		}
    }
    
    componentWillMount(){
        Axios.get("http://localhost:3001/home")
            .then(res => {
                console.log(res.data);
                this.setState({
                    name:res.data[0].Name,
                })
            })
        
    }
    
    render(){
        return(
            <div >
                <img src="assets/home.jpg" className="library"/>
                <div className="row_header_buttons">
                    <NavLink className="header_button" to="/rules" >RULES & REGULATIONS</NavLink>
                    <NavLink className="header_button" to="/search">SEARCH BOOK</NavLink>
                    <NavLink className="header_button" to="/user-book" >RENEW BOOKS</NavLink>
                    <NavLink className="header_button" to="/">LOGOUT</NavLink>
                </div>
                <div className="bg-img">
                    <p  className="title-h"><b>THE LIBRARY</b></p>
                    <div className="quotes">
                        <h1>Welcome {this.state.name}</h1>
                        "Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life."
                        <p className="author-h">-Sidney Sheldon ( American writer and producer) </p>
                    </div>
                </div>
            </div>

        );

    }
}

export default HomeComponent;