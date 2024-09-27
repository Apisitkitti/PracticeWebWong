import { useState } from 'react';
import './header.css'
import { itemInsideCard, informationInsideCard, shopCategoryForSearchs, dropDownSearchBarInformation } from './headerData';
const LocationDropdownCard = () => {
  const [isThailandButtonClick, isThailandButtonSet] = useState<boolean>(true);
  const [isForeignButtonClick, isForeignButtonSet] = useState<boolean>(false);
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  const [pageNumber, setPageCount] = useState<number>(0)
  const [numberOfSlide, slideSetter] = useState<number>(0)
  const maxSlide: number = (dropDownSearchBarInformation.imageSlideProvince.length / 4) - 1;
  const indexSlide: number = 0;
  const [numberForChangeSlide, changeSlideNumber] = useState<number>(0)
  const movementSlideNumber: number = 400;
  return (
    <div className='dropdownInformationControl provinceControlBar'>
      <img className='adjustMoreforDropdown' src='../../img/imageForDeco.png' alt='imageFoe add some gimic' />
      <div className='headerDropdown'>
        {isThailandButtonClick
          ? <button className='dropdownButton dropdownButtonHighLight' onClick={() => { isThailandButtonSet(true); isForeignButtonSet(false) }}>ประเทศไทย</button>
          : <button className='dropdownButton' onClick={() => { isThailandButtonSet(true); isForeignButtonSet(false) }}>ประเทศไทย</button>}
        {isForeignButtonClick
          ? <button className='dropdownButton dropdownButtonHighLight' onClick={() => { isThailandButtonSet(false); isForeignButtonSet(true) }}>ต่างประเทศ</button>
          : <button className='dropdownButton' onClick={() => { isThailandButtonSet(false); isForeignButtonSet(true) }}>ต่างประเทศ</button>}
      </div>
      <div className='dropdownSlideTopdown'>
        <p className='tabContent'>ปลายทางยอดนิยม</p>
        <div className='imageSlideGroup tabContent' onMouseEnter={() => setButtonIsAppear(true)} onMouseLeave={() => setButtonIsAppear(false)}>
          {isThailandButtonClick && numberForChangeSlide < maxSlide && isbuttonAppear &&
            <button className="sliderButton" onClick={() => { setPageCount(((numberOfSlide + 1) * (-movementSlideNumber))); slideSetter(numberOfSlide + 1); changeSlideNumber(numberForChangeSlide + 1) }}>
              <img className="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
            </button>
          }
          {isThailandButtonClick && numberForChangeSlide !== indexSlide && isbuttonAppear &&
            <button className="sliderButtonLeft" onClick={() => { changeSlideNumber(numberForChangeSlide - 1); setPageCount(((numberOfSlide - numberForChangeSlide - (numberForChangeSlide - 1)) * movementSlideNumber)); slideSetter(numberOfSlide - 1) }} >
              <img className="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
            </button>
          }
          {isForeignButtonClick && dropDownSearchBarInformation.imageSlideCountry.map((item, index) =>
            <a className='slideFrame' href='###' key={index}>
              <img className='imageInsideProvinceSlide' src={item.image} alt={item.textIndsideImg} />
              <p className='imageTagText'>{item.textIndsideImg}</p>
            </a>
          )}
          {isThailandButtonClick && dropDownSearchBarInformation.imageSlideProvince.map((item, index) =>
            <a className='slideFrame' href='###' key={index} style={{ transform: `translateX(${pageNumber}%)` }}>
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
          {isThailandButtonClick && dropDownSearchBarInformation.provinceNearby.map((item, index) =>
            <div key={index} className='buttonInDropdownProvince'>
              <p className='blackText' >{item}</p>
            </div>
          )}
        </div>
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


