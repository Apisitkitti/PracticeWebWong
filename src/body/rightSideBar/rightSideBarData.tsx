import { RestuarantCardType } from "../FoodProfileCard/foodprofileCardData";


interface rightSidebarContent {
  headTitle: string,
  advertise?: ContentTypeInformation[],
  recommended?: RestuarantCardType[]

}

interface ContentTypeInformation {
  ad?: boolean,
  img: string,
  name: string,
  place: string;
  bookmark: number;
}

export const rightSidebarData: rightSidebarContent[] = [
  {
    headTitle: 'ร้านอาหารที่น่าสนใจ',
  },
  {
    headTitle: 'บทความแนะนำ',
    advertise: [
      {
        ad: true,
        img: '',
        name: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน',
        place: 'เมืองอุดรธานี',
        bookmark: 4
      }]
  }
]