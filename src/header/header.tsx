import './header.css'
import { itemInsideCard, informationInsideCard, shopCategoryForSearchs, dropDownSearchBarInformation } from './headerData';
import { useHeaderStore, useLocationDropdown, useSlideHeader } from './headerState';



const LocationDropdownCard = () => {
  const { isClickThailand, isClickForeign, setIsClickedThai } = useLocationDropdown()
  const { pictureChange, slidePage, nextSlide, prevSlide, pictureToSlide, indexSlide, maxSlide, isArrowAppear, setIsArrowAppearWhenHover } = useSlideHeader()
  const { setPlaceHolder, disappearAllInterface } = useHeaderStore()
  const endOfSlide: number = maxSlide(dropDownSearchBarInformation.imageSlideProvince.length, pictureToSlide)


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
        <div className='imageSlideGroup tabContent' onMouseEnter={() => setIsArrowAppearWhenHover(true)} onMouseLeave={() => setIsArrowAppearWhenHover(false)}>
          {isClickThailand && slidePage < endOfSlide && isArrowAppear &&
            <button className="sliderButton" onClick={nextSlide}>
              <img className="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
            </button>
          }
          {isClickThailand && slidePage !== indexSlide && isArrowAppear &&
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
            <div key={index} className='buttonInDropdownProvince' onClick={() => { setPlaceHolder(item); disappearAllInterface() }}>
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
        <button className='dropdownLoginButton'>เข้าสู่ระบบ หรือ สมัครสมาชิก</button>
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
  const { isLocationToggle, isSearchBarToggle, isDropdownToggle, placeHolderInLocationBar, locationInterfaceAppear, searchbarInterfaceAppear, dropdownInterfaceAppear, disappearAllInterface, setPlaceHolder } = useHeaderStore()
  return (
    <div className="header-container " id='header'>
      <img src="../img/wongnai-logo-header.png" alt="wongnai logo" className='wongnai-logo' />
      <div className="header-center-container">
        <div className="location-container" onClick={locationInterfaceAppear}>
          <img src="../img/location.png" alt="location logo" className='location-icon' />
          <input type="text" className="location input-container" placeholder={placeHolderInLocationBar} onFocus={() => setPlaceHolder('พิมพ์สถานที่')} />
          <img src="../img/dropdown.png" alt="dropdown pic" className='icon dropdown-icon' />
        </div>
        <div className="restaurant-search-container " onClick={searchbarInterfaceAppear} onBlur={disappearAllInterface}>
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
        <button className='dropdown-button user-button' onClick={dropdownInterfaceAppear} onBlur={disappearAllInterface}>{isDropdownToggle ? <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon translateIcon' /> : <img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' />}</button>
      </div>
      {isLocationToggle &&
        <LocationDropdownCard />}
      {isSearchBarToggle &&
        <ShopCategoryDropdown />}

      {isDropdownToggle &&
        <DropdownCard />}
    </div >
  );
}

export default Header;


