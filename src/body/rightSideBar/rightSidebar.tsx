import './rightSidebar.css'
import { restaurantReccomendedWantThis } from './rightSideBarData'
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
            <div><img src={restaurant.foodImg[0]} alt={restaurant.name} /></div>
            <div className='textContainer'>
              <p><span className='boldText'>{ }</span></p>
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
    </div>
  )
}

export default RightSideBar;