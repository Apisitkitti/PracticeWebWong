export interface slideState {
  pictureToSlide: number
  slidePercentive: number
  slidePage: number
  pictureChange: number
  nextSlide: () => void
  prevSlide: () => void
}