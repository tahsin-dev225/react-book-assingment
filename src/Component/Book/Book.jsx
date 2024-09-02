
import { NavLink } from 'react-router-dom';
import imgg from '../../img/pngwing 1.png'

const Book = ({book}) => {
    const {id,image,tags,bookName,author,category,rating} =book;
    return (
        <div className='rounded-2xl border border-sky-950 shadow-xl'>
            <img className='mx-auto max-w-[180px] py-4 rounded-2xl' src={imgg} alt="" />
            
            <NavLink to={`/BookDetails/${id}`}>
                <div className='p-2 px-6'>
                    <div className='flex gap-3 dark:text-gray-300 text-[#23BE0A]'>
                        <p className="text-lg">#{tags[0]}</p>
                        <p className="text-lg">#{tags[1]}</p>
                        <p className="text-lg">#{tags[2]}</p>
                    </div>
                    <h2 className="text-2xl font-medium text-white">{bookName}</h2>
                    <p className='py-2'>{author}</p>
                    <div className='flex border-t-[1px] border-gray-500 border-dashed justify-between py-4'>
                        <p className="text-sm">{category}</p>
                        <p className="text-sm">{rating}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Book;