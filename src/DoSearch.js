import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ShelfBooks from "./ShelfBooks";

class DoSearch extends Component{
    state={
        query:'',
        newBooks:[],
        foundBooks:false
    }

    handleChange = (query)=>{
        this.setState(()=>({
            query:query.trim()
        }))

        if (query.length > 0) {
            BooksAPI.search(query).then(books => {
              if (books.length>0) {
                this.setState({ newBooks: books });
              } else {
                this.setState({ newBooks: [],foundBooks:true });
              }
            });
          } else {
            this.setState({ newBooks: [], foundBooks:true});
          }
    }



    render(){
        console.log(this.state.newBooks)
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e)=>this.handleChange(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.newBooks.map((book)=> (
                            <ShelfBooks book={book} books={this.props.books} upDateBook={this.props.upDateBook} key={book.id} />
                        ))}
                    </ol>
                </div>
                {(this.state.foundBooks && this.state.query.length>0 ) && (
                    <h3>Your search didn't return any books</h3>
                )}
            </div>
        )
    }
}

export default DoSearch