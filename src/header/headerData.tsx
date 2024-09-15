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