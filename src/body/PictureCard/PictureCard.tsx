import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  const [pageNumber, setPageCount] = useState<number>(0)
  let showImageSlider = pictureAndInformation.slice(pageNumber, pageNumber + 5)
  const handleButtonNext = () => {
    if (pageNumber < pictureAndInformation.length - showImageSlider.length) {
      setPageCount(pageNumber + 5)
    }
    else {
      return
    }

  }
  const handleButtonPrevious = () => {
    if (pageNumber !== 0) {
      setPageCount(pageNumber - 5)
    }
    else {
      return
    }
  }
  const handleButtonAppear = () => setButtonIsAppear(true);

  const handleButtonDisappear = () => setButtonIsAppear(false);

  return (
    <div className="picture-container bodySection " onMouseEnter={handleButtonAppear} onMouseLeave={handleButtonDisappear}>
      {showImageSlider.map((pictureWithCaption: PictureType, index: number) =>
        <div key={index} className="imageAndCaptionBlock" >
          <p id="pictureCaption">{pictureWithCaption.caption}</p>
          <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
          <div id="shadow"></div>
        </div>
      )}
      {pageNumber < pictureAndInformation.length - showImageSlider.length && isbuttonAppear &&
        <button id="sliderButton">
          <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" onClick={handleButtonNext} />
        </button>
      }
      {pageNumber > 0 && isbuttonAppear &&
        <button id="sliderButtonLeft">
          <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" onClick={handleButtonPrevious} />
        </button>
      }
    </div>

  )
}
function CardComponent() {
  return (
    <PictureCard pictureAndInformation={pictureAndInformation} />
  )
}
export default CardComponent