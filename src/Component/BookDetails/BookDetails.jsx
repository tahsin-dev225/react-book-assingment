import { useLoaderData, useParams } from "react-router-dom";
// import imgg from '../../img/pngwing 1.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setReadItems, setWishItems } from "../../Utility/LocalStorage";


const BookDetails = () => {
    const bookDetail = useLoaderData()
    const idm = useParams()
    const book = bookDetail.find(book => book.id =idm)
    const {id,image,tags,bookName,author,category,rating,review,totalPages,publisher,yearOfPublishing}=book
    //console.log(book)


    const getItems = localStorage.getItem('read-items');
    const item = JSON.parse(getItems);
    const intArray =[];
    item.map(tt => intArray.push(parseInt(tt)))
    // console.log(intArray,typeof(intArray[0]))
    const handleReadButton =() =>{
        setReadItems(id.id)
        // const tik = intArray.map(kk=>console.log(kk))
        // console.log(tik)
        toast('you clicked on read')
    }
    const handleWishlistButton =()=>{
        setWishItems(id.id)
        
        toast('you clicked on wishlist button')
    }

    return (
        <div className="flex my-8 items-center gap-8 app-container border border-[#aaffff42]">
            <div className="p-16 w-7/12 mx-auto">
                <img className="mx-auto" src={image} alt=""/>
            </div>
            <div className="p-3 space-y-3 w-full ">
                <h1 className="text-4xl ">{bookName}</h1>
                <h3 className="text-xl">By : {author}</h3>
                <div className="border-t-2 border-b-2  border-[#00000021]">
                    <p className="dark:text-white text-xl font-medium py-3 shadow w-full">{category}</p>
                </div>
                <h2 className="text-xl">Review : <small className="text-base">{review}</small></h2>
                <div className="border-t-2 border-b-2 my-5 border-[#00000021] w-full flex gap-5">
                    <p className="text-xl font-semibold dark:text-white  py-3 shadow">Tags : </p>
                    <p className="text-green-400 font-medium py-4 shadow">#{tags[0]}</p>
                    <p className="text-green-400 font-medium py-4 shadow ">#{tags[1]}</p>
                </div>
                <div className="flex gap-8">
                    <p className="w-3/12">Number of Pages :</p>
                    <h3 className="text-semibold">{totalPages}</h3>
                </div>
                <div className="flex  gap-8">
                    <p className="w-3/12">Publisher :</p>
                    <h3 className="text-semibold">{publisher}</h3>
                </div>
                <div className="flex gap-8">
                    <p className="w-3/12">Year of Publishing :</p>
                    <h3 className="text-semibold">{yearOfPublishing}</h3>
                </div>
                <div className="flex gap-8">
                    <p className="w-3/12">Rating :</p>
                    <h3 className="text-semibold">{rating}</h3>
                </div>
                <div>
                    <button onClick={handleReadButton} className="btn shadow-xl dark:text-white text-lg mr-5 px-8">Read</button>
                    <button onClick={handleWishlistButton} className="btn dark:text-black text-lg bg-sky-500 px-8">Wislist</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;