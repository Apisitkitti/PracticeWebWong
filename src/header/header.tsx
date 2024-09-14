import { useState } from 'react';
import './header.css'
interface itemInsideCard {
  icon: string,
  text: string
}
const urlToImg = '../../img/'
const informationInsideCard: itemInsideCard[] =
  [
    {
      icon: `${urlToImg}InsideDropDownIcon/rewardCenter.png`,
      text: 'แลกของรางวัล'
    },
    {
      icon: `${urlToImg}InsideDropDownIcon/superReviewIcon.png`,
      text: 'รวมสุดยอดรีวิว'
    },
    {
      icon: `${urlToImg}InsideDropDownIcon/scoreBoardIcon.png`,
      text: 'ตารางคะแนน'
    },
    {
      icon: `${urlToImg}InsideDropDownIcon/webBoardIcon.png`,
      text: 'เว็บบอร์ด'
    },
    {
      icon: `${urlToImg}InsideDropDownIcon/addFriendIcon.png`,
      text: 'หาเพื่อน'
    },
    {
      icon: `${urlToImg}InsideDropDownIcon/settingIcon.png`,
      text: 'ตั้งค่า'
    }
  ]
const DropdownCard = () => {
  return (
    <div className='dropdownInformationControl'>
      <div className='buttonContainerForDropdown'>
        <button className='dropdownLoginButton'>เข้าสู้ระบบ หรือ สมัครสมาชิก</button>
      </div>
      <div className='itemDropdownContainer'>
        {informationInsideCard.map((information: itemInsideCard, index: number) =>
          <div className='itemInDropdownContainer'>
            <img className='dropdownIcon' src={information.icon} alt={information.text} />
            <p>{information.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}
const Header = () => {
  const [placeHolder, setPlaceHolder] = useState<string>('กรุงเทพและ...');
  const [dropdownIsToggle, dropdropIsToggleControl] = useState<boolean>(false);
  return (
    <div className="header-container " id='header'>
      <img src="../img/wongnai-logo-header.png" alt="wongnai logo" className='wongnai-logo' />
      <div className="header-center-container">
        <div className="location-container">
          <img src="../img/location.png" alt="location logo" className='icon location-icon' />
          <input type="text" className="location input-container" placeholder={placeHolder} onFocus={() => setPlaceHolder('พิมพ์สถานที่')} onBlur={() => setPlaceHolder('กรุงเทพและ...')} />
          <img src="../img/dropdown.png" alt="dropdown pic" className='icon dropdown-icon' />
        </div>
        <div className="restaurant-search-container">
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
        <button className='dropdown-button user-button' onClick={() => dropdropIsToggleControl(!dropdownIsToggle)}><img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' /></button>
      </div>
      {dropdownIsToggle &&
        <DropdownCard />}
    </div>
  );
}

export default Header;


