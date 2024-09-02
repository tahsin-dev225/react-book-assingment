import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BookSection = () => {
    const [books,setBooks] =useState([])
    const [booksLength,setBooksLength] =useState(6)

    useEffect(()=>{
        fetch('Books.json')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="my-12 app-container">
            <h1 className="text-5xl text-center">Books</h1>
            <p className="text-center mx-auto md:w-8/12 my-4">Here are displayed some books to see more books click on the see all button which is in bottom of this section.</p>
            <div className="grid md:grid-cols-3 gap-8 ">
                {
                    books.slice(0,booksLength).map(book =><Book key={book.id} book={book}></Book>)
                }
            </div>
            <div className={ books.length === booksLength ? 'hidden':'flex justify-center my-5'}>
                <button onClick={()=>setBooksLength(books.length)} className="btn px-8">See All</button>
            </div>
        </div>
    );
};

export default BookSection;