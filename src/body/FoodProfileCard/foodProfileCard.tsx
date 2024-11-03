import { FoodCardDataShow, RestuarantCardType, restuarantData } from "./foodprofileCardData"
import { useState } from "react";
import { create } from "zustand";
import RatingScore from "../../componnent/ratingTemplate";
import './foodProfile.css'

interface cardComponentStore {
  imageForShow: (imageData: string[]) => string[]
  calculatePictureLeftNumber: (imageData: string[], imageForShow: string[]) => number
}
const useCardComponentStore = create<cardComponentStore>()((set) => ({
  imageForShow: (imageData) => imageData.slice(0, 5),
  calculatePictureLeftNumber: (imageData, imageForShow) => imageData.length - imageForShow.length,
}))



const CardComponent = ({ restuarantData }: FoodCardDataShow) => {
  const { imageForShow, calculatePictureLeftNumber } = useCardComponentStore()
  const [isBookmark, bookmarkControl] = useState<boolean>(false)
  return (

    <div className="restuarantCardContainer">
      <div className="imageRestaurantContainer">
        {imageForShow(restuarantData.foodImg).map((foodImgItem: string, index: number) =>
          <div key={index} className="imageBorder">
            <img id="foodImg" src={foodImgItem} alt={restuarantData.name + restuarantData.caption} />
            {index + 1 >= imageForShow(restuarantData.foodImg).length &&
              <span>
                +{calculatePictureLeftNumber(restuarantData.foodImg, imageForShow(restuarantData.foodImg))}
              </span>}
          </div>
        )}

      </div>
      <div className="textRestuarantContainer">
        <div className="headLineRestuarantGroup">
          <div className="firstLineHeadLineRestuarant">
            <a href="##"> {restuarantData.ads ? <span className="blackText"> Ad · </span> : ''} <span className="restuarantName boldText">{restuarantData.name}</span> <span className="restuarantPlace normalText">{restuarantData.place}</span></a>
            <img onClick={() => bookmarkControl(!isBookmark)} src={isBookmark ? "../../../img/bookmarkIconBlue.png" : "../../../img/bookmarkIcon.png"} alt="bookMarkIcon" id="bookMarkIcon" />
          </div>
          <a href="##" className="restaurantCaption linkText">{restuarantData.caption}</a>
        </div>

        <div className="restuarantStatusGroup">
          <RatingScore score={restuarantData.score} />
          <a href="###" className="restaurantTextContainer normalText"><span className="textInside underLineText">{restuarantData.review} รีวิว</span> <span className="textInside">{restuarantData.dollarSign}</span></a>
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
const FoodCardComponent = () => {
  return (
    <div className="foodListCard">
      {restuarantData.map((restuarantData: RestuarantCardType) =>
        <CardComponent restuarantData={restuarantData} />)}
    </div>
  )
}
export default FoodCardComponent