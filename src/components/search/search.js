import React from 'react';
import './search.css';
import { NavLink } from 'react-router-dom';
import { Button, Alert } from 'reactstrap';
import { TextField, MenuItem } from '@material-ui/core';
import Axios from 'axios';

class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            category:'',
            books:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        console.log(this.state.books.length);
        Axios.post("http://localhost:3001/search",this.state)
        .then(res =>{
            console.log(res.data);
            if(res.data==="No Books Available" || res.data==="Server Error")
                alert(res.data);
            else
                this.setState({ books: res.data });
            console.log(this.state.books);
        })
    }

    handleBorrow(event){
        Axios.post("http://localhost:3001/borrow",{isbn:(event.target.value)})
            .then(res => {
                console.log(res.data);
                alert(res.data);
            })
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
        if(!this.state.title && !this.state.author && !this.state.category)
            alert("Atleast fill any one of the field");
        else
            this.componentWillMount();
        event.preventDefault();
    }

    render(){
        const books = () =>{
            if(this.state.books.length)
            {
                return(
                    <table class="tables-s">
                        <tr >
                            <th><b>ISBN</b></th>
                            <th><b>BOOK TITLE</b></th>
                            <th><b>AUTHOR NAME</b></th>
                            <th><b>CATEGORY</b></th>
                            <th><b>BORROW</b></th>
                        </tr>
                        {
                            this.state.books.map((book)=>{
                                return(
                                    <tr key={book.ISBN_no}>
                                        <th>{book.ISBN_no}</th>
                                        <th>{book.Book_Title}</th>
                                        <th>{book.Author_Name}</th>
                                        <th>{book.Category}</th>
                                        <th><button class="btn-primary" onClick={this.handleBorrow} value={book.ISBN_no}>Borrow</button></th>
                                    </tr>
                                );
                            })
                        }
                    </table>
                );
            }
            else
                return(
                    <div>

                    </div>
                );
        }
        return(
            <div>
                <img src="assets/search.png" className="bg-img"/>
                <div className="row_header_buttons">
                    <NavLink className="header_button" to="/rules" >RULES & REGULATIONS</NavLink>
                    <NavLink className="header_button" to="/search">SEARCH BOOK</NavLink>
                    <NavLink className="header_button" to="/user-book" >RENEW BOOKS</NavLink>
                    <NavLink className="header_button" to="/">LOGOUT</NavLink>
                </div> 
                <div className="bg-img">
                    <p  className="title-h"><b>THE LIBRARY</b></p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-room">
                            <div className="card-body row">
                                <div className="col-3">
                                    <h6 className="label-r">Book-Title</h6>
                                    <TextField id="standard-basic" name="title" onChange={this.handleInputChange} value={this.state.title}/>
                                </div>
                                <div className="col-3">
                                    <h6 className="label-r">Author</h6>
                                    <TextField id="standard-basic"  name="author" onChange={this.handleInputChange} value={this.state.author}/>
                                </div>
                                <div className="col-3">
                                    <h6 className="label-r">Category</h6>
                                    <TextField id="standard-basic"  name="category" onChange={this.handleInputChange} value={this.state.category}/>
                                </div>
                                <div className="col-3">
                                    <button type="submit" name="submit" class="btn-primary  book_now ">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {books()}
                </div>
            </div>
        );
    }
}

export default SearchComponent;
