import { useEffect, useState } from "react";
import Chart from "../Chart/Chart";


import { BarChart, Bar, XAxis, YAxis,ResponsiveContainer } from 'recharts';


const PageToRead = () => {
    const [readBooks,setReadBooks] =useState([])

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


                // const {id, totalPages,bookName} =book
                // const data =[{name: readBooks.bookName, uv:readBooks.totalPages, pv: 240, amt:2400} ];
                // const data = [{name: {bookName}, uv: 400, pv: 2400, amt: 2400}];

                const getPath = (x, y, width, height) => (
                    `M${x},${y + height}
                    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
                    C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
                    Z`
                );

                const TriangleBar = (props) => {
                    const {
                    fill, x, y, width, height,
                    } = props;
                
                    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
                };


    return (
        <div className="app-container my-10">
            <h1 className="text-center text-2xl">Page To Read</h1>
            <div className="border border-sky-950">
                <ResponsiveContainer height={500} className='w-full'>
                    <BarChart data={readBooks}>
                        <XAxis dataKey="bookName"  />
                        <YAxis />
                        <div className="h-20 w-20 bg-slate-100"></div>
                        <Bar dataKey="totalPages" fill="#8884d8"
                        shape={<TriangleBar />} ></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PageToRead;