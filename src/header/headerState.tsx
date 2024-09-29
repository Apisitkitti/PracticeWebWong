import { create } from 'zustand';
import { slideState } from '../typeSetter';

interface locationDrodown {
  isClickThailand: boolean,
  isClickForeign: boolean,
  setIsClickedThai: (isClick: boolean) => void
}





export const useLocationDropdown = create<locationDrodown>()((set) => ({
  isClickThailand: true,
  isClickForeign: false,
  setIsClickedThai: (isClick) => set((state) => ({
    isClickThailand: state.isClickThailand = isClick,
    isClickForeign: state.isClickForeign = !isClick
  }))
}))



export const useSlideHeader = create<slideState>()((set) => ({
  indexSlide: 1,
  pictureToSlide: 4,
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
  })),
  setIsArrowAppearWhenHover: (isHover) => set((state) => ({
    isArrowAppear: state.isArrowAppear = isHover
  }))
}))

