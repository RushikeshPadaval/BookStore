import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Book  from './Book/Book';
import Signup from './components/Signup';
import Contact from './components/Contact';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {
  const [authUser,setAuthUser] =useAuth();
console.log(authUser);

  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>

<Routes>
  <Route  path='/' element={<Home/>} />
  <Route path='/books' element= { authUser? <Book/>:<Navigate to="/signup"/>}/>
  <Route path='/signup' element={<Signup/>} />
  <Route path='/contact' element = {<Contact/>}/>
</Routes>
<Toaster />

   </div>


   </>
  )
}

export default App
