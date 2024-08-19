import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const Products = props => {
    const {eachItem} = props
    const {category, image, price, rating, title} = eachItem
    const {rate, count} = rating

    return(
            <li className='eachProductContainer'>
               <img src={image} alt='Each Item' className='productImage' />
               <h3 className='eachProductTitle'>{title}</h3>
               <h3 className='eachProductCategory'>{category}</h3>
               <h2 className='eachProductCost'>{`RS :${price}/-`}</h2>
               <div className='ratingAndStockContainer'>
                 <p className='eachProductRating'><FontAwesomeIcon icon={faStar} /> {rate}</p>
                 <p className='eachProductStock'>{`Stock: ${count}`}</p>
               </div>
            </li>
    )
}
    


export default Products
