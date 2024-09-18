import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  const [pageNumber, setPageCount] = useState<number>(0)
  const [numberOfSlide, slideSetter] = useState<number>(0)
  const maxSlide: number = 2;
  const indexSlide: number = 0;
  const [numberForChangeSlide, changeSlideNumber] = useState<number>(0)
  const movementSlideNumber: number = 500;
  return (
    <div className="picture-container bodySection " onMouseEnter={() => setButtonIsAppear(true)} onMouseLeave={() => setButtonIsAppear(false)}>
      <div className="slideContainer">
        {pictureAndInformation.map((pictureWithCaption: PictureType, index: number) =>
          <div key={index} className="imageAndCaptionBlock" style={{ transform: `translateX(${pageNumber}%)` }} >
            <p id="pictureCaption">{pictureWithCaption.caption}</p>
            <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
            <div id="shadow"></div>
          </div>
        )}
        {numberForChangeSlide < maxSlide && isbuttonAppear &&
          <button id="sliderButton" onClick={() => { setPageCount(((numberOfSlide + 1) * (-movementSlideNumber))); slideSetter(numberOfSlide + 1); changeSlideNumber(numberForChangeSlide + 1) }}>
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
          </button>
        }
        {numberForChangeSlide !== indexSlide && isbuttonAppear &&
          <button id="sliderButtonLeft" onClick={() => { changeSlideNumber(numberForChangeSlide - 1); setPageCount(((numberOfSlide - numberForChangeSlide - (numberForChangeSlide - 1)) * movementSlideNumber)); slideSetter(numberOfSlide - 1) }} >
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
          </button>
        }
      </div>
    </div >

  )
}
const CardComponent = () => {
  return (
    <PictureCard pictureAndInformation={pictureAndInformation} />
  )
}
export default CardComponent