type RestuarantCardType =
  {
    ads: boolean,
    foodImg: string[]
    name: string,
    place?: string,
    caption: string,
    score: number,
    review: number,
    status: boolean,
    category: string[];
  }

export type FoodCardDataShow =
  {
    restuarantData: RestuarantCardType;
  }

const dotTemplateFoodImg: string = '../../../img/foodImg/'


export const restuarantData: RestuarantCardType[] =
  [
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/shrimp.jpg`, `${dotTemplateFoodImg}/shrimpSap.jpg`,
      `${dotTemplateFoodImg}/foodWithBarrel.jpg`, `${dotTemplateFoodImg}/foodwithnoodle.jpg`,
      `${dotTemplateFoodImg}/steak.jpg`, `${dotTemplateFoodImg}/spaghetti.jpg`, `${dotTemplateFoodImg}/pizza.jpg`
      ],
      name: 'MAKE ME WINE เมคมีไวน์',
      place: 'ลำลูกกา คลอง 4',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      status: false,
      category: ['อาหารอิตาเลียน', 'พิซซ่า', 'ร้านไวน์']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/shrimp.jpg`, `${dotTemplateFoodImg}/shrimpSap.jpg`,
      `${dotTemplateFoodImg}/foodWithBarrel.jpg`, `${dotTemplateFoodImg}/foodwithnoodle.jpg`,
      `${dotTemplateFoodImg}/steak.jpg`, `${dotTemplateFoodImg}/spaghetti.jpg`, `${dotTemplateFoodImg}/pizza.jpg`
      ],
      name: 'MAKE ME WINE เมคมีไวน์',
      place: 'ลำลูกกา คลอง 4',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      status: true,
      category: ['อาหารอิตาเลียน', 'พิซซ่า', 'ร้านไวน์']
    },

  ]