
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
    <section className='trendings'>
        <div> 
            <div className="trending-card">
               {products.map((category) => { 
                   const { id, title, price, img, description } = category;
                   return (
                       <article key={id}> 
                       <div class="trending-image"> 
                        <img src={img} alt={title} className="image" /> 
                        </div>
                        <div class="trending-info">
                           <h5>{title}</h5>
                           <h6>{price}</h6>
                        <p>{description}</p> 
                          <button>Add to Basket</button>
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