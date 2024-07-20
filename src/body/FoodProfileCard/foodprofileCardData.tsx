type RestuarantCardType =
  {
    foodImg: string[]
    name: string,
    place?: string,
    caption: string,
    score: number,
    review: number,
    status: boolean,
    category: string;
  }
export type FoodCardDataShow =
  {
    restuarantData: RestuarantCardType[];
  }
export const restuarantData: RestuarantCardType[] =
  [
    {
      foodImg: ['', ''],
      name: 'บ้านยายเวียง',
      place: 'บางขุนเทียน',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      status: false,
      category: 'อาหารทะเล'
    },
    {
      foodImg: ['', ''],
      name: 'บ้านยายเวียง',
      place: 'บางขุนเทียน',
      caption: 'ชี้เป้าเช็กอิน! คาเฟ่ริมน้ำบางขุนเทียน ฟีลดี อาหารปัง ใกล้ชิดธรรมชาติ',
      score: 5.0,
      review: 10,
      status: false,
      category: 'อาหารทะเล'
    }

  ]