import './index.css' // Import the CSS file for styling

const Sidebar = props => {
  const {showFilter1, sideBarController} = props

  const toggleSidebar = () => {
    sideBarController(!showFilter1)
    console.log('Hiii')
  }

  return (
    <div className={`sidebar ${showFilter1 ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className="close-btn" type='button'>
          X
        </button>
        <div>
          <div className='checkboxContainer'>
            <input type='checkbox' id='box'/>
            <label htmlFor='box'>CUSTOMIZABLE</label>
          </div>
          <ul>
            <li>
                <div className='custom-select-wrapper'>
                    <p>IDEAL FOR</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>OCCASION</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>WORK</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>FABRIC</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>SEGMENT</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>SUITABLE FOR</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>RAW MATERIALS</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
            <li>
                <div className='custom-select-wrapper'>
                    <p>PATTERN</p>
                    <select className="custom-select subOptions">
                        <option>All</option>
                        <option>Men's</option>
                        <option>Women's</option>
                    </select>
                </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar
