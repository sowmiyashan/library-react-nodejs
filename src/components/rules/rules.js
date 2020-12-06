import React from "react";
import './rules.css';
import { NavLink } from 'react-router-dom'

class RulesComponent extends React.Component{
    render(){
        return(
            <div>
                <img src="assets/rules.jpg" className="bg-img-r"/>
                <div className="row_header_buttons">
                    <NavLink className="header_button" to="/rules" >RULES & REGULATIONS</NavLink>
                    <NavLink className="header_button" to="/search">SEARCH BOOK</NavLink>
                    <NavLink className="header_button" to="/user-book" >RENEW BOOKS</NavLink>
                    <NavLink className="header_button" to="/">LOGOUT</NavLink>
                </div> 
                <div class="bg-img">
                    <p  className="title-h"><b>THE LIBRARY</b></p>
                    <h1 className="title"><b>RULES AND REGULATIONS</b></h1>
                    <div class="container-r">
                        <h2>GENERAL RULES</h2>
                            <p>Library is a silence zone. Mobile phones and watch alarms should be switched to silent mode before entering the Library. Private books and personal belongings are to be deposited at the entrance. Any printed materials, documents and CD-ROMs will not be permitted to be taken inside the library. Members should report the loss of their ID card immediately to the Librarian. While entering the library, Student should show the Identity card to the library staff and make entry in the Barcode Scanner. During Library hours the concerned library staff in charge will take care of entries and to maintain discipline in the library premises. Anyone found disturbing the library atmosphere will be asked to leave the library. All Library transactions should be through circulation counter only.</p>
                            <ol>
                                <li>Library members should produce their valid ID card whenever they borrow/return /renew their books at the circulation counter.</li>
                                <li>Members are not allowed to use other ID card.</li>
                                <li>Books will be renewed only if the title does not attract fine, reservation and also if it is not renewed 10 times already.</li>
                                <li>During Study holidays and Exam days Telephone and E-mail renewals are allowed, if the books does not attract fine and reservation.</li>
                                <li>Members are encouraged to check their library transaction details in Online Book Renewal.</li>
                                <li>Reference Books, Back Volumes and Periodicals are not issued.</li>
                                <li>Members are responsible for the books issued to their account.</li>
                                <li>Under special circumstances Librarian has the right to recall any issued books even before the due date.</li>
                            </ol>
                            <h2>FINE SYSTEM</h2>
                            <p>Fine will be collected for the late return of books as follows:</p>
                            <ul>
                                <li>From First week onwards from the due date Rs. 1.00 per day</li>
                                <li>Members who do not return the books even after 30 days from the due date will lose the right to borrow books.</li>
                            </ul>
                            <h2>LOSS OR DAMAGE OF BOOK</h2>
                            <p>Members should check the book thoroughly for missing pages, chapters, pictures, index etc while borrowing the books from the Library. No books in damaged condition will be accepted from the member. Mutilated or spoiled books will have to be replaced by the borrower. Incase loss of books it should be informed immediately to the Librarian and Members should replace the latest edition of the same title and author or if the book is out-of-print then they should pay double the cost of the book along with fine and processing charge of Rs 50/-.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RulesComponent;