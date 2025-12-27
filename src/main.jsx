import "bootstrap/dist/css/bootstrap.min.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./routes/App.jsx"
import CreatePost from "./components/CreatePost.jsx"
import PostList from "./components/PostList.jsx"
import { postLoader } from "./components/PostList.jsx"
import { createpostAction } from "./components/CreatePost.jsx"
const router = createBrowserRouter([
  {
    path: "/", element: <App />, 
    children: [
      { path: "/", element: <PostList/>, loader:postLoader },
    { path: "/create-post", element: <CreatePost />, action: createpostAction ,}]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
