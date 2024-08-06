import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation } from './pictureCardData';

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false);
  const handleButtonAppear = () => {
    setButtonIsAppear(true);
  }
  const handleButtonDisappear = () => {
    setButtonIsAppear(false);
  }
  return (
    <div className="picture-container bodySection " onMouseEnter={handleButtonAppear} onMouseLeave={handleButtonDisappear}>
      {pictureAndInformation.map((pictureWithCaption) =>
        <div className="imageAndCaptionBlock" >
          <p id="pictureCaption">{pictureWithCaption.caption}</p>
          <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
        </div>
      )}
      {isbuttonAppear &&
        <button id="sliderButton">
          <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
        </button>}
    </div>

  )
}
function CardComponent() {
  return (
    <PictureCard pictureAndInformation={pictureAndInformation} />

  )
}
export default CardComponent