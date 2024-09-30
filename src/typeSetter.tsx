export interface slideState {
  indexSlide: number,
  pictureToSlide: number,
  slidePercentive: number,
  slidePage: number,
  isArrowAppear: boolean,
  maxSlide: (dataLength: number, picturePerPage: number) => number,
  pictureChange: number,
  nextSlide: () => void,
  prevSlide: () => void,
  setIsArrowAppearWhenHover: (isHover: boolean) => void
}