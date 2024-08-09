import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import NotFound from "./pages/notfound/notfound"
import { Protected } from "./components/protected"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants"
import "./app.css"
import { useState } from "react"
import Navbar from "./components/nav/nav"
import Profile from "./pages/profile"
import Landing from "./pages/landing"
import Footer from "./components/footer/footer"

function Logout({ setpath }) {
  localStorage.removeItem(ACCESS_TOKEN);
  setpath(false)
  return <Navigate to={"/login"}></Navigate>
}
function Loginhandler({ setpath }) {
  setpath(false)
  return <Login loged={true}></Login>
}
function Navhandler({ setpath }) {
  setpath(true)
  return <Protected> <Home></Home> </Protected>
}

function LogoutAndRegister({ setpath }) {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  setpath(false)
  return <Register></Register>
}

function App() {
  const [path, setpath] = useState(true)
  

  return (
    <BrowserRouter>
     {path && <Navbar ></Navbar> }
      <Routes>
        <Route path="/" element={<Landing setpath={setpath}></Landing>}> </Route>
        <Route path="/home" element={<Navhandler setpath={setpath}></Navhandler>}> </Route>
        <Route path="/login" element={<Loginhandler setpath={setpath}></Loginhandler>}></Route>
        <Route path="/logout" element={<Logout setpath={setpath}></Logout>}></Route>
        <Route path="/register" element={<LogoutAndRegister setpath={setpath}></LogoutAndRegister>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {path && <Footer></Footer> }
    </BrowserRouter>
  )
}

export default App
