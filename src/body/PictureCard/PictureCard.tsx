import { FoodForShow } from "./pictureCardData"
import './pictureCard.css'
export default function PictureCard({ pictureAndInformation }: FoodForShow) {
  return (
    <div className="picture-container">
      {pictureAndInformation.map((pictureWithCaption) =>
        <div className="imageAndCaptionBlock">
          <p id="pictureCaption">{pictureWithCaption.caption}</p>
          <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
        </div>
      )}


    </div>
  )
}