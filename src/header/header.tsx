import { useState } from 'react';
import './header.css'
import { itemInsideCard, informationInsideCard, shopCategoryForSearchs, dropDownSearchBarInformation } from './headerData';
const LocationDropdownCard = () => {
  return (
    <div className='dropdownInformationControl'>
      <div className='headerDropdown'>
        <p>ประเทศไทย</p>
        <p>ต่างประเทศ</p>
      </div>
      <div className='drowdownSlideTopdown'>
        <p>ปลายทางยอดนิยม</p>
        <div className='imageSlideGroup'>
          {dropDownSearchBarInformation.imageSlide.map((item, index) =>
            <a className='slideFrame' href='###' key={index}>
              <img className='imageInsideProvinceSlide' src={item.image} alt={item.textIndsideImg} />
              <p className='imageTagText'>{item.textIndsideImg}</p>
            </a>
          )}
        </div>
        <div className='buttonInDropdownProvince'>
          <img className='dropdownIcon' src="../../img/location.png" alt="locationIcon" />
          <p className='boldText'>ใกล้ฉัน</p>
        </div>
        {dropDownSearchBarInformation.provinceNearby.map((item, index) =>
          <div key={index} className='buttonInDropdownProvince'>
            <p className='blackText'>{item}</p>
          </div>
        )}


      </div>
    </div>
  )
}
const DropdownCard = () => {
  return (
    <div className='dropdownInformationControl'>
      <div className='buttonContainerForDropdown'>
        <button className='dropdownLoginButton'>เข้าสู้ระบบ หรือ สมัครสมาชิก</button>
      </div>
      <div className='itemDropdownContainer'>
        {informationInsideCard.map((information: itemInsideCard, index: number) =>
          <div key={index} className='itemInDropdownContainer'>
            <img className='dropdownIcon' src={information.icon} alt={information.text} />
            <p>{information.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}
const ShopCategoryDropdown = () => {
  return (
    <div className='dropdownInformationControl searchbarDrop'>
      {shopCategoryForSearchs.map((iconItem: itemInsideCard, index: number) =>
        <div className='itemInDropdownContainer searchbarAdjustContainer'>
          <img className='dropdownIcon searchbaradjustIcon ' src={iconItem.icon} alt={iconItem.text} />
          <p className='normalText boldText'>{iconItem.text}</p>
        </div>)
      }
    </div>
  )
}
const Header = () => {
  const [placeHolder, setPlaceHolder] = useState<string>('กรุงเทพและ...');
  const [dropdownIsToggle, dropdropIsToggleControl] = useState<boolean>(false);
  const [searchbarIsToogle, isSearchbarTogle] = useState<boolean>(false);
  const [locationIsToggle, isLocationToggle] = useState<boolean>(false);
  const [placeIsToggle, isPlaceToggle] = useState<boolean>(false);
  return (
    <div className="header-container " id='header'>
      <img src="../img/wongnai-logo-header.png" alt="wongnai logo" className='wongnai-logo' />
      <div className="header-center-container">
        <div className="location-container" onClick={() => {
          dropdropIsToggleControl(false);
          isSearchbarTogle(false);
          isLocationToggle(false)
          isPlaceToggle(!locationIsToggle)
        }}>
          <img src="../img/location.png" alt="location logo" className='icon location-icon' />
          <input type="text" className="location input-container" placeholder={placeHolder} onFocus={() => setPlaceHolder('พิมพ์สถานที่')} onBlur={() => setPlaceHolder('กรุงเทพและ...')} />
          <img src="../img/dropdown.png" alt="dropdown pic" className='icon dropdown-icon' />
        </div>
        <div className="restaurant-search-container " onClick={() => {
          dropdropIsToggleControl(false);
          isSearchbarTogle(!searchbarIsToogle);
          isLocationToggle(false);
          isPlaceToggle(false)
        }}>
          <input type="text" className="restaurant input-container" placeholder="ร้านอาหาร โรงแรม ที่เที่ยวร้านเสริมสว..." />
        </div>
        <button className="search-button">
          <img src="../img/search_icon.png" alt="search icon" className='icon' />
        </button>
      </div>
      <div className="header-right-container">
        <button className='signIn-button user-button'>
          <img src="../img/peopleIcon.png" alt="people icon" className='icon' />
          เข้าสู่ระบบ
        </button>
        <button className='dropdown-button user-button' onClick={() => {
          dropdropIsToggleControl(!dropdownIsToggle);
          isSearchbarTogle(false);
          isLocationToggle(false);
          isPlaceToggle(false)
        }}>{dropdownIsToggle ? <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon translateIcon' /> : <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' />}</button>
      </div>
      {searchbarIsToogle &&
        <ShopCategoryDropdown />}

      {dropdownIsToggle &&
        <DropdownCard />}
      <div></div>
      {placeIsToggle &&
        <LocationDropdownCard />}
    </div >
  );
}

export default Header;


