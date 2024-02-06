import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Menu from './Menu'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import ViewDatas from './ViewDats'
import Display from './Display'
import Edit from './Edit'




function Mainrouter() {
  return (
    <div>
      <BrowserRouter>
      <Menu></Menu>
      
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
     <Route path='/register/viewdatas' element={<ViewDatas/>}></Route>
     

     <Route path='/register/viewdatas/:id' element={<Edit/>}></Route>
     <Route path='/register/viewdatas'  element={<Display/>}></Route>
   
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mainrouter
