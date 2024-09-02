import { useLoaderData, useParams } from "react-router-dom";
import imgg from '../../img/pngwing 1.png'

const BookDetails = () => {
    const bookDetail = useLoaderData()
    const idm = useParams()
    const book = bookDetail.find(book => book.id =idm)
    const {id,image,tags,bookName,author,category,rating}=book
    console.log(book)
    return (
        <div>
            <div>
                <img src={imgg} alt="" />
            </div>
            <h1>book detasi</h1>
            <h1>{id.id}</h1>
        </div>
    );
};

export default BookDetails;