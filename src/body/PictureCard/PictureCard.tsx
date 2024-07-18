import { FoodForShow } from "./pictureCardData"
import './pictureCard.css'
import { pictureAndInformation } from './pictureCardData';
function PictureCard({ pictureAndInformation }: FoodForShow) {
  return (
    <div className="picture-container bodySection">
      {pictureAndInformation.map((pictureWithCaption) =>
        <div className="imageAndCaptionBlock">
          <p id="pictureCaption">{pictureWithCaption.caption}</p>
          <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
        </div>
      )}
    </div>
  )
}
export default function CardComponent() {
  return (
    <>
      <PictureCard pictureAndInformation={pictureAndInformation} />
    </>
  )
}