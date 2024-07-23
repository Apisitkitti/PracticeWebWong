import { FoodCardDataShow, restuarantData } from "./foodprofileCardData"
import './foodProfile.css'
function CardComponent({ restuarantData }: FoodCardDataShow) {
  const imageForShow = (imageData: string[]): string[] => imageData.slice(0, 5);
  // const lastImageCheck = (imageData: string[], lastImageForShow: number): boolean => lastImageForShow < imageData.length ? true : false;

  let calculatePictureLeftNumber: number = restuarantData.length - imageForShow.length;
  return (

    <div className="restuarantCardContainer">
      {restuarantData.map((restuarantItem, index) =>
        <div key={index} className="restuarantCardContainer">
          <div className="imageRestaurantContainer">
            {imageForShow(restuarantItem.foodImg).map((foodImgItem, index) =>
              <img id="foodImg" src={foodImgItem} alt={restuarantItem.name + restuarantItem.caption} />
            )}

          </div>

          <div className="textRestuarantContainer">
            <div className="headLineRestuarantGroup">
              <div className="firstLineHeadLineRestuarant">
                <a href="##"> {restuarantItem.ads ? 'Ad · ' : ''} <span className="restuarantName boldText">{restuarantItem.name}</span> <span className="restuarantPlace normalText">{restuarantItem.place}</span></a>
                <img src="../../../img/bookmarkIcon.png" alt="bookMarkIcon" id="bookMarkIcon" />
              </div>
              <a href="##" className="restaurantCaption">{restuarantItem.caption}</a>
            </div>

            <div className="restuarantStatusGroup">
              <div className="ratingIcon"><span id="scoreText">{restuarantItem.score.toFixed(1)}</span>★</div>
              <a href="###">{restuarantItem.review} รีวิว</a>
              {restuarantItem.status ? <span className="restuarantStatus restuarantOpen">เปิดอยู่</span> : <span className="restuarantStatus restuarantClose">ปิดอยู่</span>}
            </div>

            <div className="categoryGroup">
              {restuarantItem.category.map((categoryItem, index) =>
                <a href="###">{categoryItem}</a>,
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default function FoodCardComponent() {
  return (
    <>
      <CardComponent restuarantData={restuarantData} />
    </>
  )
}