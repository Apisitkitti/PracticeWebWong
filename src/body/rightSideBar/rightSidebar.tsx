import './rightSidebar.css'
import { restaurantReccomendedWantThis } from './rightSideBarData'
import { restaurantReccomended, ContentTypeInformation, articleRecommendedContentWantThis, articleRecommendedContent } from './rightSideBarData'
import { RestuarantCardType } from '../FoodProfileCard/foodprofileCardData'
import { MouseEventHandler, useState } from 'react'
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
                  <span className='normalText'>{restaurant.review} รีวิว {restaurant.dollarSign} </span>
                  {restaurant.status ? <span className='restuarantOpen'>เปิดอยู่</span> : <span className='restuarantClose'>ปิดอยู่</span>}
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
  const [isBookmark, bookmarkControl] = useState<boolean>(false)

  const bookmarkHandleEvent: MouseEventHandler = () => {
    bookmarkControl(!isBookmark)
  }
  return (
    <div className='contentContainer'>
      <div className='headBar'>
        <p className="headText boldText">{articleData.headTitle}</p>
        <p className='headText'>{articleData.advertise.length > articleForShowData.length ? <a className='linkText' href='###'>ดูทั้งหมด</a> : ''}</p>
      </div>
      <div>
        {articleForShowData.map((item, index) =>
          <div key={index}>
            <div className='imageTextContainer'>
              <img id='imageSizing' src={item.img} alt={item.nameOfShopInsideImage} />
              <div className='restaurantPlace '>{item.place}</div>
              <div className='restaurantName '>{item.nameOfShopInsideImage}</div>
            </div>
            <div className='textContainerArticle'>
              <div className='underLineText' >{item.ad ? 'Ad ·' : ''} {item.contentName}</div>
              <div className='bookmarkGroup'>
                <img onClick={bookmarkHandleEvent} id='bookMarkIcon' src={isBookmark ? "../../img/bookmarkIconBlue.png" : "../../img/bookmarkIcon.png"} alt="bookmarkIcon " />
                <p>{isBookmark ? `${item.bookmark + 1}` : `${item.bookmark}`}</p>
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
      <ArticleContentRightSidebar articleData={articleRecommendedContent} />
    </div>
  )
}

export default RightSideBar;