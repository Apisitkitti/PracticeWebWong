import { useState } from 'react';
import './header.css'
interface itemInsideCard {
  icon: string,
  text: string
}
const informationInsideCard: itemInsideCard[] =
  [
    {
      icon: '',
      text: 'แลกของรางวัล'
    },
    {
      icon: '',
      text: 'รวมสุดยอดรีวิว'
    },
    {
      icon: '',
      text: 'ตารางคะแนน'
    },
    {
      icon: '',
      text: 'เว็บบอร์ด'
    },
    {
      icon: '',
      text: 'หาเพื่อน'
    },
    {
      icon: '',
      text: 'ตั้งค่า'
    }
  ]
const DropdownCard = () => {
  return (
    <div className='dropDownInformationControl'>
      <div>
        <button>เข้าสู้ระบบ หรือ สมัครสมาชิก</button>
      </div>
      <div>
        {informationInsideCard.map((information: itemInsideCard, index: number) =>
          <div>
            <img src={information.icon} alt={information.text} />
            <p>{information.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}
const Header = () => {
  const [placeHolder, setPlaceHolder] = useState<string>('กรุงเทพและ...');
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
        <button className='dropdown-button user-button'><img src="../img/dropdownSmall.png" alt="dropdown png" className='icon' /></button>
        <DropdownCard />
      </div>
    </div>
  );
}

export default Header;


