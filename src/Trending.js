import React, {useState } from 'react' 
import { Link } from 'react-router-dom';
import products from './data/data';
import './Trending.css'

const Trending = () => {
 //const [category, setCategory] = useState(products);
  //const [index,setIndex] = useState(0);
  //const [isloading,setIsloading] =useEffect();
  return (
    <section className='product-area section'>
        <div> 
            <div className="single-product">
               {products.map((category) => { 
                   const { id, title, price, img, description } = category;
                   return (
                       <article>
                           <div key={id}>{title}</div>
                        <img src={img} alt={title} className="image" />
                        <div>{price}</div>
                        <p>{description}</p>
                    </article>
                   );
               })}
            </div>
                         
        </div>
        </section>
  )
}

export default Trending