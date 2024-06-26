export default function Header() {
  return (
    <div className="header-container">
      <img src="../img/wongnai-logo-header.png" alt="wongnai logo" height={48} width={118} />
      <div className="header-center container">
        <div className="location-container">
          <input type="text" className="location box" placeholder="กรุงเทพและ..." />
          <img src="../img/location.png" alt="location logo" />
          <img src="../img/dropdown.png" alt="dropdown pic" />
        </div>
        <div className="restaurant-search-container"></div>
        <input type="text" className="reastaurant box" placeholder="ร้านอาหาร โรงแรม ที่เที่ยวร้านเสริมสว..." />
        <button className="search-button">
          <img src="../img/search_icon.png" alt="search icon" />
        </button>
      </div>
      <div className="header-right">
        <button>
          <img src="../img/peopleIcon.png" alt="people icon" />เข้าสู่ระบบ
        </button>
        <button><img src="../img/dropdownSmall.png" alt="dropdown png" /></button>
      </div>

    </div >
  );

}