
const WishBooks = ({book}) => {
    const {id,image,tags,bookName,author,category,rating} =book;
    return (
        <div className="flex my-7 gap-4 p-5">
            <img src={image} alt="" />
            <div className="">
                <h1 className="text-xl font-semibold">{bookName} {id}</h1>
                <p>By : {author}</p>
                <div className="text-lg flex gap-3">Tag : {tags.map((tag,idx)=><div key={idx}>{tag}</div>)}</div>
            </div>
        </div>
    );
};

export default WishBooks;