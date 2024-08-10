import { FoodCardDataShow, RestuarantCardType, restuarantData } from "./foodprofileCardData"
import { useState, MouseEventHandler } from "react";
import './foodProfile.css'


function CardComponent({ restuarantData }: FoodCardDataShow) {
  const imageForShow = (imageData: string[]): string[] => imageData.slice(0, 5);
  const calculatePictureLeftNumber = (imageData: string[], imageForShow: string[]): number => imageData.length - imageForShow.length;
  const [isBookmark, bookmarkControl] = useState<boolean>(false)

  const bookmarkHandleEvent: MouseEventHandler = () => {
    bookmarkControl(!isBookmark)
  }
  return (

    <div className="restuarantCardContainer">
      <div className="imageRestaurantContainer">
        {imageForShow(restuarantData.foodImg).map((foodImgItem: string, index: number) =>
          <div key={index} className="imageBorder">
            <img id="foodImg" src={foodImgItem} alt={restuarantData.name + restuarantData.caption} />
            {index + 1 >= imageForShow(restuarantData.foodImg).length ?
              <span>
                +{calculatePictureLeftNumber(restuarantData.foodImg, imageForShow(restuarantData.foodImg))}
              </span> : null}
          </div>
        )}

      </div>
      <div className="textRestuarantContainer">
        <div className="headLineRestuarantGroup">
          <div className="firstLineHeadLineRestuarant">
            <a href="##"> {restuarantData.ads ? 'Ad · ' : ''} <span className="restuarantName boldText">{restuarantData.name}</span> <span className="restuarantPlace normalText">{restuarantData.place}</span></a>
            <img onClick={bookmarkHandleEvent} src={isBookmark ? "../../../img/bookmarkIconBlue.png" : "../../../img/bookmarkIcon.png"} alt="bookMarkIcon" id="bookMarkIcon" />
          </div>
          <a href="##" className="restaurantCaption linkText">{restuarantData.caption}</a>
        </div>

        <div className="restuarantStatusGroup">
          <div className="ratingIcon"><span id="scoreText">{restuarantData.score.toFixed(1)}</span>★</div>
          <a href="###" className="normalText"><span className="underLineText">{restuarantData.review} รีวิว</span> {restuarantData.dollarSign}</a>

          {restuarantData.status ? <span className="restuarantStatus restuarantOpen boldText">เปิดอยู่</span> : <span className="restuarantStatus restuarantClose boldText">ปิดอยู่</span>}
        </div>

        <div className="categoryGroup">
          {restuarantData.category.map((categoryItem, index) =>
            <div>
              <a href="###" className="underLineText normalText">{categoryItem}</a>
              <span className="normalText">{index + 1 < restuarantData.category.length ? ', ' : ''} </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
function FoodCardComponent() {
  return (
    <>
      {restuarantData.map((restuarantData: RestuarantCardType) =>
        <CardComponent restuarantData={restuarantData} />)}
    </>
  )
}
export default FoodCardComponent