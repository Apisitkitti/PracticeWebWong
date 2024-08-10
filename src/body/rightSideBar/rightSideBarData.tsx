import { RestuarantCardType, restuarantData } from "../FoodProfileCard/foodprofileCardData";


const dotTemplateContentImg: string = '../../../img/content/'


interface contentWantThisIntheTop {
  headTitle: string
}
export interface needInsideContent {
  img: string,
  contentName: string
}
export interface ContentTypeInformation extends needInsideContent {
  ad?: boolean,
  place: string;
  nameOfShopInsideImage: string,
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
export interface listRecommendedWantThis extends contentWantThisIntheTop {
  listRecommended: needInsideContent[];
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
      nameOfShopInsideImage: 'ขนมปังคลีน บาย โมเน่',
      bookmark: 4
    },
    {
      ad: false,
      img: `${dotTemplateContentImg}environment.jpg`,
      contentName: 'ร้านหิ้วปีก Hiw Peek Cafe & Restaurant ร้านบรรยากาศดี ครบจบทั้งคาวหวาน',
      place: 'เมืองภูเก็ต',
      nameOfShopInsideImage: 'HIWPEEK Cafe & Restuarant หิ้วปีก คาเฟ่แอนด์เรสเตอรอง',
      bookmark: 12
    },
    {
      ad: true,
      img: `${dotTemplateContentImg}cleanBakery.jpg`,
      contentName: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน"',
      place: 'เมืองอุดรธานี',
      nameOfShopInsideImage: 'ขนมปังคลีน บาย โมเน่',
      bookmark: 4
    },
    {
      ad: false,
      img: `${dotTemplateContentImg}environment.jpg`,
      contentName: 'ร้านหิ้วปีก Hiw Peek Cafe & Restaurant ร้านบรรยากาศดี ครบจบทั้งคาวหวาน',
      place: 'เมืองภูเก็ต',
      nameOfShopInsideImage: 'HIWPEEK Cafe & Restuarant หิ้วปีก คาเฟ่แอนด์เรสเตอรอง',
      bookmark: 12
    },
    {
      ad: true,
      img: `${dotTemplateContentImg}cleanBakery.jpg`,
      contentName: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน"',
      place: 'เมืองอุดรธานี',
      nameOfShopInsideImage: 'ขนมปังคลีน บาย โมเน่',
      bookmark: 4
    },
    {
      ad: false,
      img: `${dotTemplateContentImg}environment.jpg`,
      contentName: 'ร้านหิ้วปีก Hiw Peek Cafe & Restaurant ร้านบรรยากาศดี ครบจบทั้งคาวหวาน',
      place: 'เมืองภูเก็ต',
      nameOfShopInsideImage: 'HIWPEEK Cafe & Restuarant หิ้วปีก คาเฟ่แอนด์เรสเตอรอง',
      bookmark: 12
    },
    {
      ad: true,
      img: `${dotTemplateContentImg}cleanBakery.jpg`,
      contentName: '“ขนมปังคลีน By Monnaie” ร้านดังจากครัวคุณต๋อย จุดเด่นคือขนมปังคลีน"',
      place: 'เมืองอุดรธานี',
      nameOfShopInsideImage: 'ขนมปังคลีน บาย โมเน่',
      bookmark: 4
    },
    {
      ad: false,
      img: `${dotTemplateContentImg}environment.jpg`,
      contentName: 'ร้านหิ้วปีก Hiw Peek Cafe & Restaurant ร้านบรรยากาศดี ครบจบทั้งคาวหวาน',
      place: 'เมืองภูเก็ต',
      nameOfShopInsideImage: 'HIWPEEK Cafe & Restuarant หิ้วปีก คาเฟ่แอนด์เรสเตอรอง',
      bookmark: 12
    }
  ]
}
export const listRecomended: listRecommendedWantThis =
{
  headTitle: 'รวมลิสต์แนะนำที่คุณต้องลอง',
  listRecommended: [
    {
      img: `${dotTemplateContentImg}Chinese.jpg`,
      contentName: '20 ร้านอาหารจีนต้นตำรับ ระดับภัตตาคาร ขนไปกินกันทั้งบ้าน!'
    },
    {
      img: `${dotTemplateContentImg}cafe.jpg`,
      contentName: '30 ร้านอาหารนครปฐมสุดปัง บรรยากาศน่านั่งต้องไปเยือน ฉบับอัปเดตล่าสุด!'
    },
    {
      img: `${dotTemplateContentImg}30Restaurant.jpg`,
      contentName: 'เช็กอิน 10 คาเฟ่รัชโยธิน บรรยากาศดี เดินทางง่าย ได้คอนเทนต์ฉ่ำ!'
    },
    {
      img: `${dotTemplateContentImg}cafe.jpg`,
      contentName: '30 ร้านอาหารนครปฐมสุดปัง บรรยากาศน่านั่งต้องไปเยือน ฉบับอัปเดตล่าสุด!'
    },
    {
      img: `${dotTemplateContentImg}30Restaurant.jpg`,
      contentName: 'เช็กอิน 10 คาเฟ่รัชโยธิน บรรยากาศดี เดินทางง่าย ได้คอนเทนต์ฉ่ำ!'
    }
    ,
    {
      img: `${dotTemplateContentImg}cafe.jpg`,
      contentName: '30 ร้านอาหารนครปฐมสุดปัง บรรยากาศน่านั่งต้องไปเยือน ฉบับอัปเดตล่าสุด!'
    },
    {
      img: `${dotTemplateContentImg}30Restaurant.jpg`,
      contentName: 'เช็กอิน 10 คาเฟ่รัชโยธิน บรรยากาศดี เดินทางง่าย ได้คอนเทนต์ฉ่ำ!'
    }

  ]
}

