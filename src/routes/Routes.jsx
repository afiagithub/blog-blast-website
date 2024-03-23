import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import Blogs from '../Pages/Blogs'
import Bookmarks from '../Pages/Bookmarks';
import BlogDetails from '../Pages/BlogDetails';
import BlogContent from '../Components/BlogContent';
import Author from '../Components/Author';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/blogs',
        element: <Blogs/>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <BlogContent />,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>,
      },
    ],
  },
]);