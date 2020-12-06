import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login/login.js'
import RulesComponent from './components/rules/rules';
import HomeComponent from './components/home/home';
import UBComponent from "./components/user-book/user-book";
import SearchComponent from './components/search/search';


class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={

		}
	}

	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ LoginComponent } />
					<Route exact path="/rules" component={ RulesComponent } />
					<Route exact path="/home" component={ HomeComponent } />
					<Route exact path="/user-book" component={ UBComponent } />
					<Route exact path="/search" component={ SearchComponent } />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
