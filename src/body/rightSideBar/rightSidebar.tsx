import './rightSidebar.css'
import { listRecomended, restaurantReccomendedWantThis } from './rightSideBarData'
import { restaurantReccomended, ContentTypeInformation, articleRecommendedContentWantThis, articleRecommendedContent, listRecommendedWantThis, needInsideContent } from './rightSideBarData'
import { RestuarantCardType } from '../FoodProfileCard/foodprofileCardData'
import { useState } from 'react'
import RatingScore from '../../componnent/ratingTemplate'
const FirstBlockSidebar = () => {
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
const RestaurantContentRightSidebar = ({ restaurantRecommended }: { restaurantRecommended: restaurantReccomendedWantThis }) => {
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
                {restaurant.ads && 'Ad ·'} <span className='boldText'>{restaurant.name}-</span>
              </p>
              <div className='ratingGroup'>
                <RatingScore score={restaurant.score} />
                <div className='reviewGroup'>
                  <span className='normalText'><span>{restaurant.review} รีวิว </span> <span>{restaurant.dollarSign}</span> </span>
                  {restaurant.status ? <span className='restuarantOpen'>เปิดอยู่</span> : <span className='restuarantClose'>ปิดอยู่</span>}
                </div>
              </div>
              <a href='##' className='captionText linkText'>{restaurant.caption}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ArticleContentRightSidebar = ({ articleData }: { articleData: articleRecommendedContentWantThis }) => {
  const articleForShowData: ContentTypeInformation[] = articleData.advertise.slice(0, 6);
  const [isBookmark, bookmarkControl] = useState<boolean[]>([]);
  const bookmarkHandleEvent = (index: number) => {
    const newBookmarkStates = [...isBookmark];
    newBookmarkStates[index] = !newBookmarkStates[index];
    bookmarkControl(newBookmarkStates);
  };
  return (
    <div className='contentContainer'>
      <div className='headBar'>
        <p className="headText boldText">{articleData.headTitle}</p>
        <p className='headText'>{articleData.advertise.length > articleForShowData.length ? <a className='linkText' href='###'>ดูทั้งหมด</a> : ''}</p>
      </div>
      <div>
        {articleForShowData.map((item: ContentTypeInformation, index: number) =>
          <div key={index}>
            <div className='imageTextContainer'>
              <img id='imageSizing' src={item.img} alt={item.nameOfShopInsideImage} />
              <div className='restaurantPlace '>{item.place}</div>
              <div className='restaurantName '>{item.nameOfShopInsideImage}</div>
            </div>
            <div className='textContainerArticle'>
              <div className='underLineText' >{item.ad ? 'Ad ·' : ''} {item.contentName}</div>
              <div className='bookmarkGroup'>
                <img onClick={() => bookmarkHandleEvent(index)} id='bookMarkIcon' src={isBookmark[index] ? "../../img/bookmarkIconBlue.png" : "../../img/bookmarkIcon.png"} alt="bookmarkIcon " />
                <p>{isBookmark[index] ? `${item.bookmark + 1}` : `${item.bookmark}`}</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
const ListContentRightSideBar = ({ listRecommended }: { listRecommended: listRecommendedWantThis }) => {
  const listForShowData: needInsideContent[] = listRecommended.listRecommended.slice(0, 6);
  return (
    <div className='contentContainer'>
      <div className='headBar'>
        <p className="headText boldText">{listRecommended.headTitle}</p>
        <p className='headText'>{listRecommended.listRecommended.length > listForShowData.length ? <a className='linkText' href='###'>ดูทั้งหมด</a> : ''}</p>
      </div>
      <div>
        {listForShowData.map((listItem: needInsideContent, index: number) =>
          <div key={index}>
            <img id='imageSizing' src={listItem.img} alt={listItem.contentName} />
            <p className='underLineText'>{listItem.contentName}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const RightSideBar = () => {
  return (
    <div className='rightSidebarGroup'>
      <FirstBlockSidebar />
      <RestaurantContentRightSidebar restaurantRecommended={restaurantReccomended} />
      <ArticleContentRightSidebar articleData={articleRecommendedContent} />
      <ListContentRightSideBar listRecommended={listRecomended} />
    </div>
  )
}

export default RightSideBar;