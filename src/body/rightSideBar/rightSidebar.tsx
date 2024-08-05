import './rightSidebar.css'
import { restaurantReccomendedWantThis } from './rightSideBarData'
import { restaurantReccomended } from './rightSideBarData'

function FirstBlockSidebar() {
  return (
    <div className="contentContainer">
      <p className="headText boldText">ค้นหาจากแผนที่</p>
      <div className='groupMapContent'>
        <button id='locationButton'>
          <img id='mapLocation' src="../../../img/locationWhite.png" alt="location" />
          ดูแผนที่
        </button>
      </div>
    </div>
  )
}
function RestaurantContentRightSidebr({ restaurantRecommended }: { restaurantRecommended: restaurantReccomendedWantThis }) {
  return (
    <div className="contentContainer">
      <div className='headBar'>
        <p className="headText boldText">{restaurantRecommended.headTitle}</p>
      </div>
      <div className='indsideRightSidebarContainer'>
        {restaurantRecommended.restaurant.map((restaurant, index) =>
          <div key={index}>
            <div ><img id='imageSize' src={restaurant.foodImg[0]} alt={restaurant.name} /></div>
            <div className='textContainer'>
              <p>
                {restaurant.ads ? 'Ad ·' : ''} <span className='boldText'>{restaurant.name}-</span>
              </p>
              <div className='ratingGroup'>
                <div className='ratingIcon'>
                  {restaurant.score.toFixed(1)}★
                </div>
                {restaurant.review} <span className='normalText'>รีวิว</span> <span className='normalText'>{restaurant.dollarSign}</span> {restaurant.status ? <span className='restuarantOpen'>เปิดอยู่</span> : <span className='restuarantClose'>ปิดอยู่</span>}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}


function RightSideBar() {
  return (
    <div className='rightSidebarGroup'>
      <FirstBlockSidebar />
      <RestaurantContentRightSidebr restaurantRecommended={restaurantReccomended} />
    </div>
  )
}

export default RightSideBar;