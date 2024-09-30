import { create } from 'zustand';
import { slideState } from '../typeSetter';

interface locationDropdownStore {
  isClickThailand: boolean,
  isClickForeign: boolean,
  setIsClickedThai: (isClick: boolean) => void
}

interface headerStateStore {
  placeHolderInLocationBar: string,
  isDropdownToggle: boolean,
  isSearchBarToggle: boolean,
  isLocationToggle: boolean,
  dropdownInterfaceAppear: () => void,
  searchbarInterfaceAppear: () => void,
  locationInterfaceAppear: () => void,
  disappearAllInterface: () => void,
  setPlaceHolder: (newWord: string) => void
}
export const useHeaderStore = create<headerStateStore>()((set) => ({
  placeHolderInLocationBar: 'กรุงเทพและ...',
  isDropdownToggle: false,
  isSearchBarToggle: false,
  isLocationToggle: false,

  dropdownInterfaceAppear: () => set((state) => ({
    isDropdownToggle: !state.isDropdownToggle,
    isSearchBarToggle: false
  })),

  searchbarInterfaceAppear: () => set((state) => ({
    isDropdownToggle: false,
    isSearchBarToggle: true,
    isLocationToggle: false
  })),

  locationInterfaceAppear: () => set((state) => ({
    isDropdownToggle: false,
    isSearchBarToggle: false,
    isLocationToggle: true
  })),
  disappearAllInterface: () => set((state) => ({
    isDropdownToggle: false,
    isSearchBarToggle: false,
    isLocationToggle: false
  })),
  setPlaceHolder: (newWord) => set((state) => ({
    placeHolderInLocationBar: state.placeHolderInLocationBar = newWord
  }))
}))
export const useLocationDropdown = create<locationDropdownStore>()((set) => ({
  isClickThailand: true,
  isClickForeign: false,
  setIsClickedThai: (isClick) => set((state) => ({
    isClickThailand: isClick,
    isClickForeign: !isClick
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

