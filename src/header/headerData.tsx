export interface itemInsideCard {
  icon: string,
  text: string
}
export interface imageSliderDate {
  image: string,
  textIndsideImg: string;
}

interface dropdownProvince {
  imageSlideProvince: imageSliderDate[],
  imageSlideCountry: imageSliderDate[],
  provinceNearby: string[];
}
const urlToImg = '../../img/'
export const dropDownSearchBarInformation: dropdownProvince =
{
  imageSlideProvince:
    [
      { image: `${urlToImg}province/bangkok.jpg`, textIndsideImg: 'กรุงเทพมหานคร' },
      { image: `${urlToImg}province/chonburi.jpg`, textIndsideImg: 'ชลบุรี' },
      { image: `${urlToImg}province/chiangmai.jpg`, textIndsideImg: 'เชียงใหม่' },
      { image: `${urlToImg}province/rayong.jpg`, textIndsideImg: 'ระยอง' },
      { image: `${urlToImg}province/nakorn.jpg`, textIndsideImg: 'นครราชสีมา' },
      { image: `${urlToImg}province/pranakorn.jpg`, textIndsideImg: 'พระนครศรีอยุธยา' },
      { image: `${urlToImg}province/puket.jpg`, textIndsideImg: 'ภูเก็ต' },
      { image: `${urlToImg}province/songkla.jpg`, textIndsideImg: 'สงขลา' }
    ],
  imageSlideCountry: [
    { image: `${urlToImg}country/singapore.jpg`, textIndsideImg: 'Singapore' }
  ],
  provinceNearby: [
    'กรุงเทพและปริมณฑล', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร',
    'จันทบุรี', 'ฉะเชิงเทรา', 'ฉะเชิงเทรา', 'ชะอำ', 'ชัยนาท', 'ชัยภูมิ',
    'ตราด', 'ตาก', 'ทองหล่อ', 'นครนายก', 'นครปฐม', 'นครพนม', 'นครศรีธรรมราช',
    'นครสวรรค์', 'นนทบุรี', 'นราธิวาส', 'นิมมานเหมินทร์-ศิริมังคลาจารย์', 'บางแสน', 'บึงกาฬ',
    'บุรีรัมย์', 'ปทุมธานี', 'ปราจีนบุรี', 'ปัตตานี', 'ปิ่นเกล้า', 'พะเยา', 'พังงา', 'พัทยา', 'พัทลุง',
    'พิจิตร', 'มหาสารคาม', 'มุกดาหาร', 'ยะลา', 'ยโสธร', 'รังสิต', 'ราชบุรี', 'ราชเทวี', 'ร้อยเอ็ด',
    'ลพบุรี', 'ลาดกระบัง', 'ลาดพร้าว', 'ลำปาง', 'ลำพูน', 'ศรีษะเกษ', 'ศาลายา', 'สกลนคร', 'สตูล',
    'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สยาม', 'สระบุรี', 'สระแก้ว', 'สวนผึ้ง', 'สาทร', 'สามย่าน',
    'สิงห์บุรี', 'สีลม', 'สุพรรณบุรี', 'สุรินทร์', 'สุโขทัย', 'หนองคาย', 'หนองบัวลำภู', 'หัวหิน', 'หาดใหญ่', 'อารีย์',
    'อำนาจเจริญ', 'อุตรดิตถ์', 'อุทัยธานี', 'อุบลราชธานี', 'อโศก', 'อ่างทอง', 'เขาค้อ', 'เขาใหญ่ นครนายก', 'เขาใหญ่ ปราจีนบุรี',
    'เขาใหญ่ สระบุรี', 'เพชรบุรี', 'เพชรบูรณ์', 'เมืองทองธานี', 'เยาวราช', 'เลย', 'เอกมัย', 'แพร่', 'แม่ฮ่องสอน']
}





export const informationInsideCard: itemInsideCard[] =
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
export const shopCategoryForSearchs: itemInsideCard[] =
  [
    {
      icon: `${urlToImg}searchbarIcon/locationIcon.png`,
      text: 'ร้านอาหารใกล้เคียง'
    },
    {
      icon: `${urlToImg}searchbarIcon/foodEquipmentIcon.png`,
      text: 'ร้านอาหาร'
    },
    {
      icon: `${urlToImg}searchbarIcon/lipstickIcon.png`,
      text: 'ร้านเสริมสวย และ สปา'
    },
    {
      icon: `${urlToImg}searchbarIcon/homeIcon.png`,
      text: 'ที่พัก'
    },
    {
      icon: `${urlToImg}searchbarIcon/cameraIcon.png`,
      text: 'สถานที่ท่องเที่ยว'
    },
    {
      icon: `${urlToImg}searchbarIcon/isBookmarkIcon.png`,
      text: 'ที่บันทึกไว้'
    }
  ]