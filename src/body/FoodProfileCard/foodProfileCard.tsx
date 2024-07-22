import { FoodCardDataShow, restuarantData } from "./foodprofileCardData"
import './foodProfile.css'
function CardComponent({ restuarantData }: FoodCardDataShow) {
  return (

    <div className="restuarantCardContainer">
      {restuarantData.map((restuarantItem, index) =>
        <div key={index} className="restuarantCardContainer">
          <div className="imageRestaurantContainer">
            {restuarantItem.foodImg.map((foodImgItem, index) =>
              <img src={foodImgItem} alt={restuarantItem.name + restuarantItem.caption} width={109} height={109} />
            )}
          </div>

          <div className="textRestuarantContainer">
            <div className="headLineRestuarantGroup">
              {restuarantItem.ads ? 'Ad · ' : ''}
              <a href="##">{restuarantItem.name} <span>{restuarantItem.place}</span></a>
              <a href="##">{restuarantItem.caption}</a>
            </div>

            <div className="restuarantStatusGroup">
              <div className="ratingIcon">{restuarantItem.score}★</div>
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