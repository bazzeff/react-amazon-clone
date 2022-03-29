import React from 'react'
import Header from './components/layout/header/Header';import { Link } from 'react-router-dom';
import menu from './data/menu';  

const Categories = () => {

  return (
    <section className="">
    <div> 
        <div className="dark:bg-gray-900 text-black dark:text-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
           {menu.map((category) => { 
               const { id, url, title, price, img, description } = category;
               return (
                <article key={id}> 
                     <div className="bg-white m-2 max-w-sm rounded overflow-hidden shadow-lg">
                     <Link to={url}>
<img className="w-full h-72"  src={img} alt={title} /></Link>
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">{title}</div>
 <h6 className="pt-2 m-0 leading-4 font-semibold">{price}</h6>
<p className="text-gray-700 text-base">
{description}
</p>
</div>
<div className="px-6 pt-4 pb-2">
<Link to={url} className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-2  rounded-full tracking-wide
                                           font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300" >Select Category</Link>
</div>
</div>
                </article>
               );
           })}
        </div>
                     
    </div>
    </section>
  )
}

export default Categories
