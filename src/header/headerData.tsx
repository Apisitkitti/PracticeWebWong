export interface itemInsideCard {
  icon: string,
  text: string
}
const urlToImg = '../../img/'
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