import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';
import { create } from "zustand";
import { slideState } from "../../typeSetter";


const useChangeSlide = create<slideState>()((set) => (
  {
    indexSlide: 1,
    pictureToSlide: 5,
    slidePercentive: 100,
    slidePage: 1,
    pictureChange: 0,
    isArrowAppear: false,
    maxSlide: (dataLength, picturePerPage) => dataLength / picturePerPage,
    nextSlide: () => set((state) => ({
      pictureChange: state.pictureChange - (state.pictureToSlide * state.slidePercentive),
      slidePage: state.slidePage + 1,
    })),
    prevSlide: () => set((state) => ({
      pictureChange: state.pictureChange + (state.pictureToSlide * state.slidePercentive),
      slidePage: state.slidePage - 1
    })), setIsArrowAppearWhenHover: (isHover) => set((state) => ({
      isArrowAppear: state.isArrowAppear = isHover
    }))
  }))

function PictureCard({ pictureAndInformation }: FoodForShow) {
  const { pictureChange, slidePage, nextSlide, prevSlide, pictureToSlide, indexSlide, maxSlide, isArrowAppear, setIsArrowAppearWhenHover } = useChangeSlide()
  const endOfSlide: number = maxSlide(pictureAndInformation.length, pictureToSlide);
  return (
    <div className="picture-container bodySection " onMouseEnter={() => setIsArrowAppearWhenHover(true)} onMouseLeave={() => setIsArrowAppearWhenHover(false)}>
      <div className="slideContainer">
        {pictureAndInformation.map((pictureWithCaption: PictureType, index: number) =>
          <div key={index} className="imageAndCaptionBlock" style={{ transform: `translateX(${pictureChange}%)` }} >
            <p className="pictureCaption boldWhiteText">{pictureWithCaption.caption}</p>
            <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
          </div>
        )}
        {slidePage < endOfSlide && isArrowAppear &&
          <button id="sliderButton" onClick={nextSlide}>
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
          </button>
        }
        {slidePage !== indexSlide && isArrowAppear &&
          <button id="sliderButtonLeft" onClick={prevSlide}>
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