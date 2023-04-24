import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import UserPage from './components/auth/UserPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>
      }></Route>
          <Route path='/user/:id' element={UserPage}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
