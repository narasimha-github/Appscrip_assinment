import { useState, useEffect } from 'react'
import Products from '../Products'
import Sidebar from '../Sidebar'
import './index.css'

const Body = () => {
    const [products, setProducts] = useState([])
    const [showFilter, setShowFilter] = useState(false)

    const filterView = () => {
        setShowFilter(!showFilter)
    }

    const sideBarController = controller => {
        setShowFilter(controller)
    }

    const getDataFromApi = async () => {
        const url = 'https://fakestoreapi.com/products';
        const options = {
            method: 'GET'
        }
    
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
       getDataFromApi()
    },[])


    
    return(
        <li className='bodyMainContainer'>
          <div className='decBorder'>
          <div className='decContainer'>
            <h1 className='decHeading'>DISCOVER OUR PRODUCTS</h1>
            <p className='decPara'>
                Discover the latest trends and unbeatable deals at Clasic store , where fashion meets convenience.We offer a wide selection of high-quality products, from stylish clothing and accessories to cutting-edge electronics, home essentials, and more. Whether you're looking to upgrade your wardrobe.
            </p>
          </div>
          <div className='bodyFilterContainer'>
            <div className='ItemsCountContainer'>
                <h4 className='totalItems'>3425 ITEMS</h4>
                <button className='filterBut' onClick={filterView} type='button'>{!showFilter ? `< SHOWFILTER`:`> HIDEFILTER`}</button>
            </div>
            <div className='filterName'>
                <button onClick={filterView} type='button'>FILTER</button>
            </div>
            <div className='custom-select-wrapper'>
              <select id="custom-select" className="custom-select">
                 <option>RECOMENDED</option>
                 <option>NEWEST FIRST</option>
                 <option>RECOMENDED</option>
                 <option>PRICE :HIGH-LOW</option>
                 <option>PRICE :LOW-HIGH</option>
              </select>
            </div>
          </div>
          </div>
          <div>
            <Sidebar showFilter1={showFilter} sideBarController={sideBarController}/>
            <ul className='allProducts'>
              {products.map(each => (
                <Products eachItem={each} key={each.id} />
              ))}
          </ul>
          </div>
        </li>
    )
}

export default Body