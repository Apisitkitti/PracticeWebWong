import { FoodCardDataShow, restuarantData } from "./foodprofileCardData"
import './foodProfile.css'


function CardComponent({ restuarantData }: FoodCardDataShow) {
  const imageForShow = (imageData: string[]): string[] => imageData.slice(0, 5);
  const calculatePictureLeftNumber = (imageData: string[], imageForShow: string[]): number => imageData.length - imageForShow.length;
  return (

    <div className="restuarantCardContainer">
      <div className="imageRestaurantContainer">
        {imageForShow(restuarantData.foodImg).map((foodImgItem, index) =>
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
            <img src="../../../img/bookmarkIcon.png" alt="bookMarkIcon" id="bookMarkIcon" />
          </div>
          <a href="##" className="restaurantCaption">{restuarantData.caption}</a>
        </div>

        <div className="restuarantStatusGroup">
          <div className="ratingIcon"><span id="scoreText">{restuarantData.score.toFixed(1)}</span>★</div>
          <a href="###">{restuarantData.review} รีวิว {restuarantData.dollarSign}</a>

          {restuarantData.status ? <span className="restuarantStatus restuarantOpen">เปิดอยู่</span> : <span className="restuarantStatus restuarantClose">ปิดอยู่</span>}
        </div>

        <div className="categoryGroup">
          {restuarantData.category.map((categoryItem, index) =>
            <a href="###">{categoryItem}{index + 1 < restuarantData.category.length ? ', ' : ''} </a>
          )}
        </div>
      </div>
    </div>
  )
}
function FoodCardComponent() {
  return (
    <>
      {restuarantData.map((restuarantData, index) =>
        <CardComponent restuarantData={restuarantData} />)}
    </>
  )
}
export default FoodCardComponent