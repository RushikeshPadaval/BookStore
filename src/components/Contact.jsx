import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6 mt-10">
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black">✕</Link>

        <div className="grid lg:grid-cols-3 items-center px-10">
          <div className="grid grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
            {/* Job Location */}
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-md">
              <h4 className="text-gray-800 text-sm font-bold mt-4">Visit Office</h4>
              <p className="text-xs text-gray-600 mt-1">123 Main Street, City, Country</p>
            </div>

            {/* Contact Email */}
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-md">
              <h4 className="text-gray-800 text-sm font-bold mt-4">Email</h4>
              <p className="text-xs text-gray-600 mt-1">contact@example.com</p>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-md">
              <h4 className="text-gray-800 text-sm font-bold mt-4">Phone</h4>
              <p className="text-xs text-gray-600 mt-1">+123 456 7890</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
            <h2 className="text-2xl sm:text-3xl text-white text-center font-bold mb-6">Contact us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-w-md mx-auto space-y-2">
                <input type='text' placeholder='Name' className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none" {...register("name", { required: true })} />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                <input type='email' placeholder='Email' className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none" {...register("email", { required: true })} />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                <input type='text' placeholder='Phone No.' className="w-full bg-white rounded-md py-3 px-4 text-sm outline-none" {...register("phone", { required: true })} />
                {errors.phone && <span className="text-sm text-red-500">This field is required</span>}

                <textarea placeholder='Message' rows="6" className="w-full bg-white rounded-md px-4 text-sm pt-3 outline-none" {...register("message", { required: true })} />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}

                <button type='submit' className="text-white w-full bg-black hover:bg-[#111] rounded-md text-sm px-6 py-3 mt-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
