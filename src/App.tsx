import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/main.css"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
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