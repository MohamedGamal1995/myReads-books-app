import React, { Component } from "react";
import ShelfBooks from "./ShelfBooks";

export default class ListOfShelves extends Component{
    render(){
        const { books, shelf } = this.props
        const shelfBooks = books.filter((book)=>(
            book.shelf === shelf.key
        ))

        return(
            <div className='bookshelf'>
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks.map(book=>(
                            <ShelfBooks key={book.id} book={book} books={this.props.books}shelf={shelf} upDateBook={this.props.upDateBook} /> 
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

