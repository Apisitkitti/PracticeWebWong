import { RestuarantCardType, restuarantData } from "../FoodProfileCard/foodprofileCardData";


const dotTemplateContentImg: string = '../../../img/content/'


interface contentWantThisIntheTop {
  headTitle: string
}
interface needInsideContent {
  img: string,
  contentName: string
}
export interface ContentTypeInformation extends needInsideContent {
  ad?: boolean,
  place: string;
  nameOfShop: string,
  bookmark: number;
}
export interface articleRecommendedContentWantThis extends contentWantThisIntheTop {
  advertise: ContentTypeInformation[]
}
export interface restaurantReccomendedWantThis extends contentWantThisIntheTop {
  restaurant: RestuarantCardType[];
}
export const restaurantReccomended: restaurantReccomendedWantThis =
{
  headTitle: 'ร้านอาหารแนะนำ',
  restaurant: restuarantData
}
export const articleRecommendedContent: articleRecommendedContentWantThis =
{
  headTitle: 'บทความแนะนำ',
  advertise: [
    {
      ad: true,
      img: `${dotTemplateContentImg}cleanBakery.jpg`,
      contentName: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน"',
      place: 'เมืองอุดรธานี',
      nameOfShop: 'ขนมปังคลีน บาย โมเน่',
      bookmark: 4
    },
    {
      ad: false,
      img: `${dotTemplateContentImg}environment.jpg`,
      contentName: 'ร้านหิ้วปีก Hiw Peek Cafe & Restaurant ร้านบรรยากาศดี ครบจบทั้งคาวหวาน',
      place: 'เมืองภูเก็ต',
      nameOfShop: 'HIWPEEK Cafe & Restuarant หิ้วปีก คาเฟ่แอนด์เรสเตอรอง',
      bookmark: 12
    },
  ]
}
export const listRecomended =
{
  headTitle: 'รวมลิสต์แนะนำที่คุณต้องลอง',
  listRecommended: [
    {
      img: '',
      contentName: ''
    },
    {
      img: '',
      contentName: ''
    },
    {
      img: '',
      contentName: ''
    },
    {
      img: '',
      contentName: ''
    },
  ]
}

