import React from "react";
import ShelfBooks from "./ShelfBooks";

export default function ListOfShelves (props){
    
        const { books, shelf } = props
        const shelfBooks = books.filter((book)=>(
            book.shelf === shelf.key
        ))

        return(
            <div className='bookshelf'>
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks.map(book=>(
                            <ShelfBooks key={book.id} book={book} books={props.books} shelf={shelf} upDateBook={props.upDateBook} /> 
                        ))}
                    </ol>
                </div>
            </div>
        )
    
}

