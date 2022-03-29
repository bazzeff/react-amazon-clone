
import React from 'react' 
//import { Link } from 'react-router-dom';
import products from './data/data'; 
import './Trending.css'
 
const Trending = () => {
   // const [{ basket }, dispatch] = useStateValue();
 
const addToBasket = () => {
  //dispatch item to basket 
}
 //const [category, setCategory] = useState(products);
  //const [index,setIndex] = useState(0);
  //const [isloading,setIsloading] =useEffect();
  return (
    <section className="">
        <div> 
            <div className="dark:bg-gray-900 text-black dark:text-white p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
               {products.map((category) => { 
                   const { id, title, price, img, description } = category;
                   return (
                    <article key={id}> 
                         <div className="bg-white m-2 max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full h-72"  src={img} alt={title} />
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
        </section>
  )
}

export default Trending