import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Clients from "./pages/Clients"
import Todo from "./pages/Todo"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import Events from "./pages/Events"
import Login from "./pages/Login"
import AccountSettings from "./pages/AccountSettings"


function App() {



  return (
    <BrowserRouter>
      <Routes>
     <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
        <Route path="/"  element = {<Dashboard/>}/> 
        <Route path="/projects" element = {<Projects/>}/> 
        <Route path="/clients" element = {<Clients/>}/> 
        <Route path="/todo" element = {<Todo/>}/> 
        <Route path="/messages" element = {<Messages/>}/> 
        <Route path="/profile" element = {<Profile/>}/> 
        <Route path="/events" element = {<Events/>}/> 
        <Route path="/account-settings" element = {<AccountSettings/>}/> 
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
