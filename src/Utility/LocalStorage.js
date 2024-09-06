import { json } from "react-router-dom";

const getStoredReadItems =()=>{
    const storedReadItem = localStorage.getItem('read-items');
    if(storedReadItem){
        return JSON.parse(storedReadItem)
    }
    return []
}
const getStoredWishItems =()=>{
    const storedReadItem = localStorage.getItem('wish-items');
    if(storedReadItem){
        return JSON.parse(storedReadItem)
    }
    return []
}

const setReadItems =(id)=>{
    const storedReadItems = getStoredReadItems();
    const exists = storedReadItems.find(bookId => bookId === id);
    if(!exists){
        storedReadItems.push(id);
        localStorage.setItem('read-items', JSON.stringify(storedReadItems))
    }
}

const setWishItems =(id)=>{
    const storedReadItems = getStoredWishItems();
    const exists = storedReadItems.find(bookId => bookId === id);
    if(!exists){
        storedReadItems.push(id);
        localStorage.setItem('wish-items', JSON.stringify(storedReadItems))
    }
}

export {setReadItems,setWishItems,getStoredReadItems}