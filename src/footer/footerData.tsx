type footerCategoryDataType =
  {
    header: string;
    insideText: string[]
  }
type platformButton =
  {
    icon: string,
    subtext: string,
    maintext: string
  }
type socialIcon =
  {
    applicationImg: string,
    alt: string
  }
type applicationImg = {
  dowloadPlatformImg: platformButton[],
  socialImg: socialIcon[];
}
export type dataInsideFooter =
  {
    appImg: applicationImg,
    footerInformation: footerCategoryDataType[]
  }
export const applicationImg: applicationImg =
{
  dowloadPlatformImg:
    [
      {
        icon: '',
        subtext: '',
        maintext: ''
      },
    ],
  socialImg:
    [
      {
        applicationImg: '',
        alt: ''
      }
    ]
}
export const footerData: footerCategoryDataType[] =
  [
    {
      header: 'สำหรับผู้ใช้ Wongnai',
      insideText:
        [
          'เกี่ยวกับ Wongnai Community',
          'ระดับของผู้ใช้ Wongnai',
          'เกี่ยวกับ Wongnai Elite',
          'ตารางอันดับของผู้ใช้งาน',
          'แนวทางปฏิบัติของผู้ใช้งาน'
        ]
    },
    {
      header: 'สำหรับร้านหรือธุรกิจ',
      insideText:
        [
          'แจ้งเป็นเจ้าของร้าน',
          'ลงโฆษณากับ Wongnai',
          'ระบบจัดการร้านอาหาร (Wongnai POS)',
          'รับเดลิเวอรีผ่าน Wongnai x LINE MAN (Wongnai Merchant App)',
          'บทความเทคนิคการตลาด'
        ]
    },
    {
      header: 'สำหรับสือมวลชน',
      insideText:
        [
          'ข่าว Wongnai',
          'ปฏิฑินกิจกรรม Wongnai Event',
          'โลโก้ Wongnai และวิธีการใช้'
        ]
    },
    {
      header: 'ร่วมงานกับเรา',
      insideText:
        [
          'ตำแหน่งเปิดรับ',
          'Life@Wongnai',
          'ระบบจัดการร้านอาหาร (Wongnai POS)',
          'รับเดลิเวอรีผ่าน Wongnai x LINE MAN (Wongnai Merchant App)',
          'บทความเทคนิคการตลาด'
        ]
    },
    {
      header: 'เกี่ยวกับ Wongnai',
      insideText:
        [
          'ประวัติบริษัท',
          'ติดต่อเรา',
          'ศูนย์ช่วยเหลือ'
        ]
    }

  ]
