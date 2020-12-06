import './user-book.css';
import React from 'react';
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Axios from 'axios';


class UBComponent extends React.Component{

    constructor(props){
		super(props);
		this.state ={
            count:'',
            fine:'',
            books:[],
        }
        this.handleRenew = this.handleRenew.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }
    
    componentWillMount(){
        Axios.get("http://localhost:3001/fine")
            .then(res1 =>{
                this.setState({
                    count:res1.data[0].Book_count,
                    fine:res1.data[0].Fine
                })
            })
        Axios.get("http://localhost:3001/book")
            .then(res =>{
                this.setState({books:res.data});
            })
    }

    handleRenew(event){
        Axios.post("http://localhost:3001/renew",{isbn:(event.target.value)})
            .then(res => {
                console.log(res.data);
                alert(res.data);
                this.componentWillMount();
            })
    }

    handleReturn(event){
        Axios.post("http://localhost:3001/return",{isbn:(event.target.value)})
            .then(res => {
                console.log(res.data);
                alert(res.data);
                this.componentWillMount();
            })
    }
    
    render(){
        return(
            <div >
                <img src="assets/UB.jpg" className="picture"/>
                <div className="row_header_buttons">
                    <NavLink className="header_button" to="/rules" >RULES & REGULATIONS</NavLink>
                    <NavLink className="header_button" to="/search">SEARCH BOOK</NavLink>
                    <NavLink className="header_button" to="/user-book" >RENEW BOOKS</NavLink>
                    <NavLink className="header_button" to="/">LOGOUT</NavLink>
                </div> 
                <div className="bg-img">
                    <p  className="title-h"><b>THE LIBRARY</b></p>
                    <div className="card-room-u">
                        <div className="card-body row">
                            <h1 className="label-n">Book Count : {this.state.count}</h1>
                        </div>
                    </div>
                    <div className="card-room-t">
                        <div className="card-body row">
                            <h1 className="label-n">Fine : Rs {this.state.fine}.00 /-</h1>
                        </div>
                    </div>
                    <table class="tables">
                        <tr >
                            <th><b>ISBN</b></th>
                            <th><b>REGISTER NUMBER</b></th>
                            <th><b>BOOK TITLE</b></th>
                            <th><b>ISSUE DATE</b></th>
                            <th><b>DUE DATE</b></th>
                            <th><b>RENEW</b></th>
                            <th><b>RETURN</b></th>
                        </tr>
                        {
                            this.state.books.map((book)=>{
                                return(
                                    <tr key={book.ISBN_no}>
                                        <th>{book.ISBN_no}</th>
                                        <th>{book.Reg_no}</th>
                                        <th>{book.Book_Title}</th>
                                        <th>{book.Issue_Date}</th>
                                        <th>{book.Due_Date}</th>
                                        <th ><button class="btn-primary"  onClick={this.handleRenew} value={book.ISBN_no} >RENEW</button></th>
                                        <th><button class="btn-primary" onClick={this.handleReturn} value={book.ISBN_no}>RETURN</button></th>
                                    </tr>
                                );
                            })
                        }

                        
                    </table>
                </div>
            </div>

        );

    }
}

export default UBComponent;