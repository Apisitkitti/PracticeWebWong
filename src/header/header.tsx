import './header.css'
export default function Header() {
  return (
    <div className="header-container">
      <img src="../img/wongnai-logo-header.png" alt="wongnai logo" height={48} width={118} className='wongnai-logo' />
      <div className="header-center container">
        <div className="location container">
          <img src="../img/location.png" alt="location logo" className='icon location-icon' />
          <input type="text" className="location input-container" placeholder="กรุงเทพและ..." />
          <img src="../img/dropdown.png" alt="dropdown pic" className='icon dropdown-icon' />
        </div>
        <div className="restaurant-search ">
          <input type="text" className="restaurant input-container" placeholder="ร้านอาหาร โรงแรม ที่เที่ยวร้านเสริมสว..." />
          <button className="search-button">
            <img src="../img/search_icon.png" alt="search icon" className='icon' />
          </button>
        </div>
      </div>
      <div className="header-right container">
        <button>
          <img src="../img/peopleIcon.png" alt="people icon" className='icon' />เข้าสู่ระบบ
        </button>
        <button><img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' /></button>
      </div>
    </div >
  );

}