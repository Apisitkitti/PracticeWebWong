import { FoodCardDataShow, restuarantData } from "./foodprofileCardData"

function CardComponent({ restuarantData }: FoodCardDataShow) {
  return (
    <div>
      {restuarantData.map((restuarantItem, index) =>
        <div key={index}>
          {restuarantItem.name}
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