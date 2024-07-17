type PictureType =
  {
    caption: string,
    picture: string;
  }
export type FoodForShow =
  {
    pictureAndInformation: PictureType[];
  }
export const pictureAndInformation: PictureType[] =
  [
    {
      caption: "มื้อพิเศษ อร่อยซ่าไปกับโค้ก",
      picture: '../../../img/Coke.jpg'
    },
    {
      caption: "กินจริงจังกับ กับบัตร ttb",
      picture: '../../../img/ttbOat.jpg'
    }
  ]