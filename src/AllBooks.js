import React, { Component } from "react";
import ListOfShelves from "./ListOfShelves";


class AllBooks extends Component{
    
    render(){
        const {shelves} = this.props   
        return(
            <div className="list-books">
                 <div className="list-books-title">
                    <h1>MyReads</h1>
                 </div>
                 <div>
                    <div className="list-books-content">
                    
                    {shelves.map((shelf)=>(
                        <ListOfShelves key={shelf.key} books={this.props.books} shelf={shelf} upDateBook={this.props.upDateBook} />
                    ))} 
                    </div>
                 </div>
            </div>
        )
    }
}

export default AllBooks