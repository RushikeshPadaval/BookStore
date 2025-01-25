import React from 'react';

const Banner = () => {
  return (
    <>
 <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
    <div className='w-full md:w-1/2' >
    <div className='space-y-12 mt-12 md:mt-32 '>
    <h1 className='text-4xl font-bold '>Discover, read, and fall in love with books that inspire. Your perfect story is
       <span className='text-pink-500'> just a click away!</span>
       </h1>
       <p>
       Dive into a vast collection of books across genres, from thrilling adventures to heartwarming tales. Whether you're a casual reader or a passionate bookworm, we have something for everyone. Explore our carefully curated selection and let every page take you on a new journey.

       </p>
       </div>
       </div>
    <div className='w-full  md:w-1/2' >Right</div>
    </div>
    </>
  );
}

export default Banner
  