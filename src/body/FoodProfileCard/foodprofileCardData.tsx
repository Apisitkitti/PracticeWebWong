type RestuarantCardType =
  {
    ads: boolean,
    foodImg: string[]
    name: string,
    place?: string,
    caption: string,
    score: number,
    review: number,
    dollarSign: string;
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
      foodImg: [`${dotTemplateFoodImg}/firstRestuarant/shrimp.jpg`, `${dotTemplateFoodImg}/firstRestuarant//shrimpSap.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//foodWithBarrel.jpg`, `${dotTemplateFoodImg}/firstRestuarant//foodwithnoodle.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//steak.jpg`, `${dotTemplateFoodImg}/firstRestuarant//spaghetti.jpg`, `${dotTemplateFoodImg}/firstRestuarant//pizza.jpg`
      ],
      name: 'MAKE ME WINE เมคมีไวน์',
      place: 'ลำลูกกา คลอง 4',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      dollarSign: '฿฿฿',
      status: false,
      category: ['อาหารอิตาเลียน', 'พิซซ่า', 'ร้านไวน์']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/secondRestaurant/riceWithMeat.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meatWithEgg.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/meatShabu.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meat.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/icon.jpg`, `${dotTemplateFoodImg}/secondRestaurant/foodCart.jpg`, `${dotTemplateFoodImg}/secondRestaurant/floyd.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/dessert.jpg`
      ],
      name: 'Shabu & Co.',
      caption: 'ชาบูพรีเมียมเปิดใหม่ ย่านสาทร คัดสรรวัตถุดิบคุณภาพ วากิวนำเข้าเกรด A5',
      score: 5.0,
      review: 1,
      dollarSign: '฿฿฿฿฿฿',
      status: false,
      category: ['ชาบู/สุกี้ยากี้/หม้อไฟ', 'อาหารญี่ปุ่น']
    },
    {
      ads: false,
      foodImg: [`${dotTemplateFoodImg}/thirdRestaurant/view.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/beachView.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/shrimp.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/sitting.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/rainbow.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/peopleRestuarant.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/cake.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`
      ],
      name: 'Beachy cafe บีชชี่ซีฟู้ด',
      place: 'บางขุนเทียน',
      caption: 'คาเฟ่ และ ร้านอาหารบรรยากาศริมน้ำบางขุนเทียน เมนูหลากหลาย ซีฟู้ดสดใหม่',
      score: 5.0,
      review: 11,
      dollarSign: '฿฿฿',
      status: true,
      category: ['อาหารทะเล']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/firstRestuarant/shrimp.jpg`, `${dotTemplateFoodImg}/firstRestuarant//shrimpSap.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//foodWithBarrel.jpg`, `${dotTemplateFoodImg}/firstRestuarant//foodwithnoodle.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//steak.jpg`, `${dotTemplateFoodImg}/firstRestuarant//spaghetti.jpg`, `${dotTemplateFoodImg}/firstRestuarant//pizza.jpg`
      ],
      name: 'MAKE ME WINE เมคมีไวน์',
      place: 'ลำลูกกา คลอง 4',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      dollarSign: '฿฿฿',
      status: false,
      category: ['อาหารอิตาเลียน', 'พิซซ่า', 'ร้านไวน์']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/secondRestaurant/riceWithMeat.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meatWithEgg.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/meatShabu.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meat.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/icon.jpg`, `${dotTemplateFoodImg}/secondRestaurant/foodCart.jpg`, `${dotTemplateFoodImg}/secondRestaurant/floyd.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/dessert.jpg`
      ],
      name: 'Shabu & Co.',
      caption: 'ชาบูพรีเมียมเปิดใหม่ ย่านสาทร คัดสรรวัตถุดิบคุณภาพ วากิวนำเข้าเกรด A5',
      score: 5.0,
      review: 1,
      dollarSign: '฿฿฿฿฿฿',
      status: false,
      category: ['ชาบู/สุกี้ยากี้/หม้อไฟ', 'อาหารญี่ปุ่น']
    },
    {
      ads: false,
      foodImg: [`${dotTemplateFoodImg}/thirdRestaurant/view.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/beachView.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/shrimp.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/sitting.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/rainbow.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/peopleRestuarant.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/cake.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`
      ],
      name: 'Beachy cafe บีชชี่ซีฟู้ด',
      place: 'บางขุนเทียน',
      caption: 'คาเฟ่ และ ร้านอาหารบรรยากาศริมน้ำบางขุนเทียน เมนูหลากหลาย ซีฟู้ดสดใหม่',
      score: 5.0,
      review: 11,
      dollarSign: '฿฿฿',
      status: true,
      category: ['อาหารทะเล']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/firstRestuarant/shrimp.jpg`, `${dotTemplateFoodImg}/firstRestuarant//shrimpSap.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//foodWithBarrel.jpg`, `${dotTemplateFoodImg}/firstRestuarant//foodwithnoodle.jpg`,
      `${dotTemplateFoodImg}/firstRestuarant//steak.jpg`, `${dotTemplateFoodImg}/firstRestuarant//spaghetti.jpg`, `${dotTemplateFoodImg}/firstRestuarant//pizza.jpg`
      ],
      name: 'MAKE ME WINE เมคมีไวน์',
      place: 'ลำลูกกา คลอง 4',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      dollarSign: '฿฿฿',
      status: false,
      category: ['อาหารอิตาเลียน', 'พิซซ่า', 'ร้านไวน์']
    },
    {
      ads: true,
      foodImg: [`${dotTemplateFoodImg}/secondRestaurant/riceWithMeat.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meatWithEgg.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/meatShabu.jpg`, `${dotTemplateFoodImg}/secondRestaurant/meat.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/icon.jpg`, `${dotTemplateFoodImg}/secondRestaurant/foodCart.jpg`, `${dotTemplateFoodImg}/secondRestaurant/floyd.jpg`,
      `${dotTemplateFoodImg}/secondRestaurant/dessert.jpg`
      ],
      name: 'Shabu & Co.',
      caption: 'ชาบูพรีเมียมเปิดใหม่ ย่านสาทร คัดสรรวัตถุดิบคุณภาพ วากิวนำเข้าเกรด A5',
      score: 5.0,
      review: 1,
      dollarSign: '฿฿฿฿฿฿',
      status: false,
      category: ['ชาบู/สุกี้ยากี้/หม้อไฟ', 'อาหารญี่ปุ่น']
    },
    {
      ads: false,
      foodImg: [`${dotTemplateFoodImg}/thirdRestaurant/view.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/beachView.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/shrimp.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/sitting.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/rainbow.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/peopleRestuarant.jpg`,
      `${dotTemplateFoodImg}/thirdRestaurant/cake.jpg`, `${dotTemplateFoodImg}/thirdRestaurant/crab.jpg`
      ],
      name: 'Beachy cafe บีชชี่ซีฟู้ด',
      place: 'บางขุนเทียน',
      caption: 'คาเฟ่ และ ร้านอาหารบรรยากาศริมน้ำบางขุนเทียน เมนูหลากหลาย ซีฟู้ดสดใหม่',
      score: 5.0,
      review: 11,
      dollarSign: '฿฿฿',
      status: true,
      category: ['อาหารทะเล']
    }


  ]