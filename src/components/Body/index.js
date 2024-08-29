import { useState, useEffect } from 'react'
import Products from '../Products'
import Sidebar from '../Sidebar'
import './index.css'

const Body = () => {
    const [products, setProducts] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const [sortOption, setSortOption] = useState('RECOMENDED');
    const [sortedProducts, setSortedProducts] = useState([]);


    const filterView = () => {
        setShowFilter(!showFilter)
    }

    const sideBarController = controller => {
        setShowFilter(controller)
    }

    const handleSortChange = (event) => {
      setSortOption(event.target.value);
    };

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
      let sorted = [...products];
  
      switch (sortOption) {
        case 'NEWEST FIRST':
          sorted = sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'PRICE :HIGH-LOW':
          sorted = sorted.sort((a, b) => b.price - a.price);
          break;
        case 'PRICE :LOW-HIGH':
          sorted = sorted.sort((a, b) => a.price - b.price);
          break;
        default:
          sorted = products;
          break;
      }
  
      setSortedProducts(sorted);
    }, [sortOption, products]);
  

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
            <select id="custom-select" className="custom-select" onChange={handleSortChange}>
        <option value="RECOMENDED">RECOMENDED</option>
        <option value="NEWEST FIRST">NEWEST FIRST</option>
        <option value="PRICE :HIGH-LOW">PRICE :HIGH-LOW</option>
        <option value="PRICE :LOW-HIGH">PRICE :LOW-HIGH</option>
      </select>

            </div>
          </div>
          </div>
          <div>
            <Sidebar showFilter1={showFilter} sideBarController={sideBarController}/>
            <ul className='allProducts'>
              {sortedProducts.map(each => (
                <Products eachItem={each} key={each.id} />
              ))}
          </ul>
          </div>
        </li>
    )
}

export default Body
