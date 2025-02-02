import React from 'react';
import Home from './home/Home';
import Books from './components/Books';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
   <>
{/* <Home/>
<Books/> */}


<Routes>
  <Route  path='/' element={<Home/>} />
  <Route path='/books' element= {<Books/>}/>
</Routes>
   </>
  )
}

export default App
