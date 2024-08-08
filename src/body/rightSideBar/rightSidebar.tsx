import './rightSidebar.css'
import { restaurantReccomendedWantThis } from './rightSideBarData'
import { restaurantReccomended, ContentTypeInformation, articleRecommendedContentWantThis, articleRecommendedContent } from './rightSideBarData'
import { RestuarantCardType } from '../FoodProfileCard/foodprofileCardData'
function FirstBlockSidebar() {
  return (
    <div className="contentContainer">
      <div className='headText'>
        <p className="headText boldText">ค้นหาจากแผนที่</p>
      </div>
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
  const dataForShow: RestuarantCardType[] = restaurantReccomended.restaurant.slice(0, 2);
  return (
    <div className="contentContainer">
      <div className='headBar'>
        <p className="headText boldText">{restaurantRecommended.headTitle}</p>
      </div>
      <div className='indsideRightSidebarContainer'>
        {dataForShow.map((restaurant: RestuarantCardType, index: number) =>
          <div className='cardRestaurantContainer' key={index}>
            <div ><img id='imageSize' src={restaurant.foodImg[0]} alt={restaurant.name} /></div>
            <div className='textContainer'>
              <p>
                {restaurant.ads ? 'Ad ·' : ''} <span className='boldText'>{restaurant.name}-</span>
              </p>
              <div className='ratingGroup'>
                <div className='ratingIcon'>
                  <span id='scoreText'>{restaurant.score.toFixed(1)}</span>★
                </div>
                <div>
                  <span className='normalText'>{restaurant.review} รีวิว </span>
                  <span className='normalText'>{restaurant.dollarSign}</span> {restaurant.status ? <span className='restuarantOpen'>เปิดอยู่</span> : <span className='restuarantClose'>ปิดอยู่</span>}
                </div>
              </div>
              <a href='##' className='linkText'>{restaurant.caption}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ArticleContentRightSidebar({ articleData }: { articleData: articleRecommendedContentWantThis }) {
  const articleForShowData: ContentTypeInformation[] = articleData.advertise.slice(0, 6);

  return (
    <div className='contentContainer'>
      <div className='headBar'>
        <p className="headText boldText">{articleData.headTitle}</p>
        <p className='headText'>{articleData.advertise.length > articleForShowData.length ? <a className='linkText' href='###'>ดูทั้งหมด</a> : ''}</p>
      </div>

    </div>
  )
}

function RightSideBar() {
  return (
    <div className='rightSidebarGroup'>
      <FirstBlockSidebar />
      <RestaurantContentRightSidebr restaurantRecommended={restaurantReccomended} />
      <ArticleContentRightSidebar articleData={articleRecommendedContent} />

    </div>
  )
}

export default RightSideBar;