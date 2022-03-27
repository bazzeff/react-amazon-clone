import React from 'react'
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section className="container bg-white mx-auto text-center py-2 mb-2">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black">
                Start now your old phone worth its weight in gold 
              </h1>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <h3 className="my-4 text-3xl leading-tight">
              Sell your electronics in 2 minutes flat!
              </h3>
              <Link to="/sell">
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Sell!
              </button>
            </Link>
            </section>
  )
}

export default Newsletter