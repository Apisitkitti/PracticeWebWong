import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';
import { create } from "zustand";

interface slideState {
  slideNumber: number
  slidePage: number
  pictureChange: number
  nextSlide: () => void
  prevSlide: () => void
}
const useChangeSlide = create<slideState>()((set) => (
  {
    slideNumber: 1,
    slidePage: 1,
    pictureChange: 500,
    nextSlide: () => set((state) => ({
      slideNumber: state.slidePage * -state.pictureChange,
      slidePage: state.slidePage + 1,
    })),
    prevSlide: () => set((state) => ({
      slidePage: state.slidePage,
      slideNumber: state.slidePage * state.pictureChange
    }))
  }))
function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  // const [pageNumber, setPageCount] = useState<number>(0)
  // const [numberOfSlide, slideSetter] = useState<number>(0)
  const maxSlide: number = (pictureAndInformation.length / 5);
  const indexSlide: number = 1;
  // const [numberForChangeSlide, changeSlideNumber] = useState<number>(0)
  // const movementSlideNumber: number = 500;
  const { slideNumber, slidePage, nextSlide, prevSlide } = useChangeSlide()
  return (
    <div className="picture-container bodySection " onMouseEnter={() => setButtonIsAppear(true)} onMouseLeave={() => setButtonIsAppear(false)}>
      <div className="slideContainer">
        {pictureAndInformation.map((pictureWithCaption: PictureType, index: number) =>
          <div key={index} className="imageAndCaptionBlock" style={{ transform: `translateX(${slideNumber}%)` }} >
            <p className="pictureCaption boldWhiteText">{pictureWithCaption.caption}</p>
            <img id="imageInside" src={pictureWithCaption.picture} alt={pictureWithCaption.caption} />
            <div id="shadow"></div>
          </div>
        )}
        {slidePage < maxSlide && isbuttonAppear &&
          <button id="sliderButton" onClick={nextSlide}>
            <img id="imageButtonImage" src="../../img/dropdownSmall.png" alt="sliderButton" />
          </button>
        }
        {slidePage !== indexSlide && isbuttonAppear &&
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