import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  const [pageNumber, setPageCount] = useState<number>(0)
  const picturePerPage: number = 5;
  const showImageSlider = pictureAndInformation.slice(pageNumber, pageNumber + picturePerPage)

  return (
    <div className="picture-container bodySection " onMouseEnter={() => setButtonIsAppear(true)} onMouseLeave={() => setButtonIsAppear(false)}>
      <div className="slideContainer">
        {showImageSlider.map((pictureWithCaption: PictureType, index: number) =>
          <div key={index} className="imageAndCaptionBlock" >
            <p id="pictureCaption">{pictureWithCaption.caption}</p>
            <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
            <div id="shadow"></div>
          </div>
        )}
        {pageNumber < pictureAndInformation.length - showImageSlider.length && isbuttonAppear &&
          <button id="sliderButton">
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" onClick={() => setPageCount(pageNumber + picturePerPage)} />
          </button>
        }
        {pageNumber > 0 && isbuttonAppear &&
          <button id="sliderButtonLeft">
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" onClick={() => setPageCount(pageNumber - picturePerPage)} />
          </button>
        }
      </div>
    </div>

  )
}
const CardComponent = () => {
  return (
    <PictureCard pictureAndInformation={pictureAndInformation} />
  )
}
export default CardComponent