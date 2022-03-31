import React from "react";
import "./Dashboard.css";
import products from './data/data';


function Dashboard() {

  return (
    <div className="body"> 
<div className="{ 'dark': isDark }">
<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-800 text-black dark:text-white">
 {/* <!-- Header -->  */}
 <div className="h-full ml-14 mt-14 mb-10 md:ml-64"> 

        {/* <!--  resources --> */ }
        <div className="mt-8 mx-4"> 
           

<div className="dark:bg-gray-800 text-black dark:text-white grid grid-flow-row-dense grid-cols-1 gap-1 flex flex-wrap -m-4 sm:grid-cols-3 md:grid-cols-4">
{products.map((category) => { 
                   const { id, title, price, img, description } = category;
                   return (
                       <article key={id}> 
                         <div className="dark:bg-gray-700 text-black dark:text-white max-w-sm m-2 rounded overflow-hidden shadow-lg">
  <img className="w-72 h-72"  src={img} alt={title} />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
     <h6 className="pt-2 m-0 leading-4 font-semibold">{price}</h6>
    <p className="text-gray-700 text-base">
    {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <button className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-2  rounded-full tracking-wide
                                               font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300" >Add to Basket</button>
  </div>
</div>
                    </article>
                   );
               })}

  </div> 
        </div>
      {/*  <!-- ./External resources --> */ }
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;