import React  from "react";
import ListOfShelves from "./ListOfShelves";


function AllBooks (props) {
    
        const {shelves} = props   
        return(
            <div className="list-books">
                 <div className="list-books-title">
                    <h1>MyReads</h1>
                 </div>
                 <div>
                    <div className="list-books-content">
                    
                    {shelves.map((shelf)=>(
                        <ListOfShelves key={shelf.key} books={props.books} shelf={shelf} upDateBook={props.upDateBook} />
                    ))} 
                    </div>
                 </div>
            </div>
        )
    
}

export default AllBooks
