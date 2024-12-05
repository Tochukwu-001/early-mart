"use client";
import React from 'react';
import { Field, Form, Formik } from 'formik';

const page = () => {

  const initVal = {
    prodctName: "",
    productImage: null,
    productCategory: "",
    productPrice: "",
    productDescription: ""
  }

  return (
    <main className='min-h-dvh p-3'>
      <div className='max-w-lg mx-auto p-5 rounded-lg shadow-lg bg-white'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Post a Product</h1>
        <Formik
          initialValues={initVal}
        >
          <Form className='space-y-5'>
            {/* product name */}
            <div>
              <label htmlFor="" className='text-sm'>Product Name:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product name"
                name="productName"
                type="text"
              />
            </div>
            {/* product image */}
            <div>
              <label htmlFor="" className='text-sm'>Product Image:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                name="productImage"
                type="file"
                accept="image/*"
              />
            </div>
            {/* product category */}
            <div>
              <label htmlFor="" className='text-sm'>Product Category:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product category"
                name="productCategory"
                type="text"
              />
            </div>
            {/* product price */}
            <div>
              <label htmlFor="" className='text-sm'>Product Price:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product price"
                name="productPrice"
                type="number"
              />
            </div>
            {/* product description */}
            <div>
              <label htmlFor="" className='text-sm'>Product Description:</label>
              <Field
                className="mt-1 w-full p-2 border rounded-md outline-none"
                placeholder="Enter product desciption"
                name="productDescription"
                type="text"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
            >
              Post Product
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default page