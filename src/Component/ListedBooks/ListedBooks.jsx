// import { setWishItems } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import ReadBook from "../ReadBook/ReadBook";
import WishBooks from "../WishlBooks/WishBooks";

const ListedBooks = () => {
    const [readBooks,setReadBooks] =useState([])
    const [wishBook,setWishBook] =useState([])
    const [removeRead,setRemoveRead] = useState()
    const [removeWish,setRemoveWish] = useState('hidden')

    const setBooks= ()=>{
        setRemoveRead('block')
        setRemoveWish('hidden')
    }
    const setWish =()=>{
        setRemoveWish('block')
        setRemoveRead('hidden')
    }
    const getItems = localStorage.getItem('read-items')
    const item = JSON.parse(getItems)
    
    
    useEffect(()=>{
        fetch('./Books.json')
        .then(res =>res.json())
        .then(data =>{
            const readBook =[];
            for (const id of item) {
                const intId =parseInt(id)
                const books =data.find(book => book.id === intId )
                readBook.push(books)
            }
            setReadBooks(readBook)
            console.log(readBook)
        } )
    },[])

    const getWish = localStorage.getItem('wish-items')
    const WishItem = JSON.parse(getWish)
    useEffect(()=>{
        fetch('./Books.json')
        .then(res =>res.json())
        .then(data =>{
            const readBook =[];
            for (const id of WishItem) {
                const intId =parseInt(id)
                const books =data.find(book => book.id === intId )
                readBook.push(books)
            }
            setWishBook(readBook)
            console.log(readBook)
        } )
    },[])
    
    return (
        <div className="app-container my-8">
            <div className="py-6  w-full rounded-md bg-slate-100">
                <h1 className="text-3xl font-semibold text-center">Books</h1>
            </div>
            <div className="flex justify-center my-4">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white m-1">Filter <h1><FaAngleDown></FaAngleDown></h1></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <button onClick={()=>setBooks()} className='btn'>Read Books</button>
                <button onClick={()=>setWish()} className="btn">Wishlist Books</button>
            </div>
            <div className="flex gap-5 ">
                <div className={removeRead}>
                    {
                        readBooks.map(book => <ReadBook key={book.id} book={book}></ReadBook>)
                    }
                </div>
                <div className={removeWish}>
                    {
                        wishBook.map(book => <WishBooks key={book.id} book={book}></WishBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;