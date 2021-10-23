import React, { Component } from "react";
import noCoverFound from './images/book-cover-not-available.png'

export default class ShelfBooks extends Component{

    handleUpdate = (e)=>{
        const shelf = e.target.value;
        const book = this.props.book;
        this.props.upDateBook(book, shelf)
    };
    render(){
        const {book,books} = this.props;
        
        
        //updating the shelf value according to the book
        let shelf = 'none';
        books.forEach((item)=>{
            if(item.id === book.id){
                shelf=item.shelf
            };
        });

        console.log(books)


        return(
            <li >
                <div className="book">
                    <div className="book-top">
                                                                                                            {/*handle if there isn't a cover image*/}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail: noCoverFound})` }}></div>
                            <div className="book-shelf-changer">
                                <select value={shelf} onChange={this.handleUpdate}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors?(book.authors.join(' & ')) : ('') }</div>
                </div>
            </li>
        )
    }
}
