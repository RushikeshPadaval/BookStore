import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Book  from './Book/Book';
function App() {
  return (
   <>
{/* <Home/>
<Books/> */}


<Routes>
  <Route  path='/' element={<Home/>} />
  <Route path='/books' element= {<Book/>}/>
</Routes>
   </>
  )
}

export default App
