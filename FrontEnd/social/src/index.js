import React from 'react';
import Posts from './posts';
import ReactDOM from 'react-dom/client';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Home from './home';
import Login from './login';
import Counter from './counter';
import ViewPosts from './viewpost';
import Registeration from './register';
import CreatePost from './createpost';
import AboutPage from './about';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <h1>Page Not Found</h1>
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path: '/posts/:postId',
    element: <Posts></Posts>
  },
  {
    path: '/posts',
    element: <ViewPosts></ViewPosts>
  },
  {
    path : '/counter',
    element : <Counter></Counter>
  },
  {
    path : '/register',
    element : <Registeration></Registeration>
  },
  {
    path : 'createpost',
    element : <CreatePost></CreatePost>
  },
  {
    path : 'about',
    element : <AboutPage></AboutPage>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);