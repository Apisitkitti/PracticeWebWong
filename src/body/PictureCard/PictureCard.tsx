import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false);
  const handleButtonAppear = () => setButtonIsAppear(true);

  const handleButtonDisappear = () => setButtonIsAppear(false);

  return (
    <div className="picture-container bodySection " onMouseEnter={handleButtonAppear} onMouseLeave={handleButtonDisappear}>
      {pictureAndInformation.map((pictureWithCaption: PictureType, index: number) =>
        <div key={index} className="imageAndCaptionBlock" >
          <p id="pictureCaption">{pictureWithCaption.caption}</p>
          <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
          <div id="shadow"></div>
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