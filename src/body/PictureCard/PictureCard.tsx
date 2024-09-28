import { FoodForShow } from "./pictureCardData"
import { useState } from "react";
import './pictureCard.css'
import { pictureAndInformation, PictureType } from './pictureCardData';
import { create } from "zustand";

interface slideState {
  pictureToSlide: number
  slidePercentive: number
  slidePage: number
  pictureChange: number
  nextSlide: () => void
  prevSlide: () => void
}
const useChangeSlide = create<slideState>()((set) => (
  {
    pictureToSlide: 5,
    slidePercentive: 100,
    slidePage: 1,
    pictureChange: 0,
    nextSlide: () => set((state) => ({
      pictureChange: state.pictureChange - (state.pictureToSlide * state.slidePercentive),
      slidePage: state.slidePage + 1,
    })),
    prevSlide: () => set((state) => ({
      pictureChange: state.pictureChange + (state.pictureToSlide * state.slidePercentive),
      slidePage: state.slidePage - 1
    }))
  }))
function PictureCard({ pictureAndInformation }: FoodForShow) {
  const [isbuttonAppear, setButtonIsAppear] = useState<boolean>(false)
  const indexSlide: number = 1;
  const { pictureChange, slidePage, nextSlide, prevSlide, pictureToSlide } = useChangeSlide()
  const maxSlide: number = (pictureAndInformation.length / pictureToSlide);
  return (
    <div className="picture-container bodySection " onMouseEnter={() => setButtonIsAppear(true)} onMouseLeave={() => setButtonIsAppear(false)}>
      <div className="slideContainer">
        {pictureAndInformation.map((pictureWithCaption: PictureType, index: number) =>
          <div key={index} className="imageAndCaptionBlock" style={{ transform: `translateX(${pictureChange}%)` }} >
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