import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"



 function Contact () {
 const {
  register,
  handleSubmit,
  formState: {errors},

 }=useForm()


 const onSubmit = (data) => {
  console.log(data);

  
 }
 return(
  <div>
    <dialog id='my_modal_3'  className='modal' >
      <div className='modal-box' >
        <form onSubmit={handleSubmit(onSubmit)} 
        method='dialog'>
        <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' >✕
        </Link>
        <h3  className='font-bold text-lg ' >Contact US
        </h3>
        {/*  */}

        </form>

      </div>

    </dialog>
  </div>
 )
}

export default Contact