import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import Book from "./Pages/Book"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/main.css"
import { createHashRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'


function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </>
  )
}


export default App