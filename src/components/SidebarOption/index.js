import './index.css' 

const SidebarOption = props => {
  const {side} = props


  return (
    <div>
      <div className={`sidebar1 ${side ? 'open1' : ''}`}>
        <h2>Options</h2>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarOption
