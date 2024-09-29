import { create } from 'zustand';
import { slideState } from '../typeSetter';

interface locationDrodown {
  isClickThailand: boolean,
  isClickForeign: boolean,
  isButtonAppear: boolean,
  setIsClickedThai: (isClick: boolean) => void
  setIsButtonAppearWhenHover: (isHover: boolean) => void
}
export const useLocationDropdown = create<locationDrodown>()((set) => ({
  isClickThailand: true,
  isClickForeign: false,
  isButtonAppear: false,
  setIsClickedThai: (isClick) => set((state) => ({
    isClickThailand: state.isClickThailand = isClick,
    isClickForeign: state.isClickForeign = !isClick
  })),
  setIsButtonAppearWhenHover: (isHover) => set((state) => ({
    isButtonAppear: state.isButtonAppear = isHover
  }))
}))



export const useSlideHeader = create<slideState>()((set) => ({
  pictureToSlide: 4,
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

