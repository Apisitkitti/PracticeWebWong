import { RestuarantCardType, restuarantData } from "../FoodProfileCard/foodprofileCardData";


interface rightSidebarContent {
  headTitle: string,
  advertise?: ContentTypeInformation[],
  recommended?: RestuarantCardType[],
  listRecommended?: needInsideContent[]

}
interface needInsideContent {
  img: string,
  name: string
}
interface ContentTypeInformation extends needInsideContent {
  ad?: boolean,
  place: string;
  bookmark: number;
}
export const rightSidebarData: rightSidebarContent[] = [
  {
    headTitle: 'ร้านอาหารที่น่าสนใจ',
    recommended: restuarantData

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
      },
      {
        ad: false,
        img: '',
        name: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน',
        place: 'เมืองอุดรธานี',
        bookmark: 4
      },
    ]
  },
  {
    headTitle: '',
    listRecommended: [
      {
        img: '',
        name: ''
      },
      {
        img: '',
        name: ''
      },
      {
        img: '',
        name: ''
      },
      {
        img: '',
        name: ''
      },
    ]

  }
]