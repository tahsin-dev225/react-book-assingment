import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';
import PageToRead from './Component/PageToRead/PageToRead.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBooks',
        element:<ListedBooks></ListedBooks>,
        // loader: ()=> fetch('../Books.json')
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>
      },{
        path:'/bookDetails/:id',
        element:<BookDetails></BookDetails>,
        loader:() => fetch('../Books.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} ></RouterProvider>
    </HelmetProvider>
  </StrictMode>,
)
