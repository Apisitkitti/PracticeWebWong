import { useState } from 'react';
import './header.css'
import { itemInsideCard, informationInsideCard, shopCategoryForSearchs, dropDownSearchBarInformation } from './headerData';
import { useLocationDropdown, useSlideHeader } from './headerState';



const LocationDropdownCard = () => {
  const { isClickThailand, isClickForeign, setIsClickedThai, isButtonAppear, setIsButtonAppearWhenHover } = useLocationDropdown()
  const indexSlide: number = 1;
  const { pictureChange, slidePage, nextSlide, prevSlide, pictureToSlide } = useSlideHeader()
  const maxSlide: number = dropDownSearchBarInformation.imageSlideProvince.length / pictureToSlide;


  return (
    <div className='dropdownInformationControl provinceControlBar'>
      <img className='adjustMoreforDropdown' src='../../img/imageForDeco.png' alt='imageFoe add some gimic' />
      <div className='headerDropdown'>
        {isClickThailand
          ? <button className='dropdownButton dropdownButtonHighLight' onClick={() => setIsClickedThai(true)}>ประเทศไทย</button>
          : <button className='dropdownButton' onClick={() => setIsClickedThai(true)} >ประเทศไทย</button>}
        {isClickForeign
          ? <button className='dropdownButton dropdownButtonHighLight' onClick={() => setIsClickedThai(false)}>ต่างประเทศ</button>
          : <button className='dropdownButton' onClick={() => setIsClickedThai(false)}>ต่างประเทศ</button>}
      </div>
      <div className='dropdownSlideTopdown'>
        <p className='tabContent'>ปลายทางยอดนิยม</p>
        <div className='imageSlideGroup tabContent' onMouseEnter={() => setIsButtonAppearWhenHover(true)} onMouseLeave={() => setIsButtonAppearWhenHover(false)}>
          {isClickThailand && slidePage < maxSlide && isButtonAppear &&
            <button className="sliderButton" onClick={nextSlide}>
              <img className="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
            </button>
          }
          {isClickThailand && slidePage !== indexSlide && isButtonAppear &&
            <button className="sliderButtonLeft" onClick={prevSlide} >
              <img className="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
            </button>
          }
          {isClickForeign && dropDownSearchBarInformation.imageSlideCountry.map((item, index) =>
            <a className='slideFrame' href='###' key={index}>
              <img className='imageInsideProvinceSlide' src={item.image} alt={item.textIndsideImg} />
              <p className='imageTagText'>{item.textIndsideImg}</p>
            </a>
          )}
          {isClickThailand && dropDownSearchBarInformation.imageSlideProvince.map((item, index) =>
            <a className='slideFrame' href='###' key={index} style={{ transform: `translateX(${pictureChange}%)` }}>
              <img className='imageInsideProvinceSlide' src={item.image} alt={item.textIndsideImg} />
              <p className='imageTagText'>{item.textIndsideImg}</p>
            </a>
          )}
        </div>
        <div className='slideTopdownText'>
          <div className='buttonInDropdownProvince'>
            <img className='dropdownIcon provinceIcon' src="../../img/location.png" alt="locationIcon" />
            <p className='boldText'>ใกล้ฉัน</p>
          </div>
          {isClickThailand && dropDownSearchBarInformation.provinceNearby.map((item, index) =>
            <div key={index} className='buttonInDropdownProvince'>
              <p className='blackText' >{item}</p>
            </div>
          )}
        </div>
      </div>
    </div >
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
          isPlaceToggle(true)
        }}>
          <img src="../img/location.png" alt="location logo" className='icon location-icon' />
          <input type="text" className="location input-container" placeholder={placeHolder} onFocus={() => setPlaceHolder('พิมพ์สถานที่')} onBlur={() => setPlaceHolder('กรุงเทพและ...')} />
          <img src="../img/dropdown.png" alt="dropdown pic" className='icon dropdown-icon' />
        </div>
        <div className="restaurant-search-container " onClick={() => {
          dropdropIsToggleControl(false);
          isSearchbarTogle(true);
          isLocationToggle(false);
          isPlaceToggle(false)
        }} onBlur={() => {
          dropdropIsToggleControl(false);
          isSearchbarTogle(false);
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
        }}>{dropdownIsToggle ? <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon translateIcon' /> : <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' />}</button>
      </div>
      {placeIsToggle &&
        <LocationDropdownCard />}
      {searchbarIsToogle &&
        <ShopCategoryDropdown />}

      {dropdownIsToggle &&
        <DropdownCard />}
    </div >
  );
}

export default Header;


