import { FoodCardDataShow, restuarantData } from "./foodprofileCardData"

function CardComponent({ restuarantData }: FoodCardDataShow) {
  return (
    <div>
      {restuarantData.map((restuarantItem, index) =>
        <div key={index} className="foodPictureContainer">
          {restuarantItem.foodImg}
          {restuarantItem.ads ? 'Ad · ' : ''}
          <a href="##">{restuarantItem.name} <span>{restuarantItem.place}</span></a>
          <a href="##">{restuarantItem.caption}</a>
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