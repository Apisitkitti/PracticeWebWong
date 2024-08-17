type linkInSide =
  {
    link: string
    insideText: string
  }

type footerCategoryDataType =
  {
    header: string,
    linkText: linkInSide[];
  }
type socialIcon =
  {
    applicationImg: string,
    alt: string,
    link: string
  }
type applicationImgType = {
  dowloadPlatformImg: socialIcon[],
  socialImg: socialIcon[];
}
export type dataInsideFooter =
  {
    appImg: applicationImgType,
    footerInformation: footerCategoryDataType[]
  }
export const applicationImg: applicationImgType =
{
  dowloadPlatformImg:
    [
      {
        applicationImg: '../../../img/application/appStore.png',
        alt: 'appStore Icon',
        link: ''
      },
      {
        applicationImg: '../../../img/application/googlePlay.png',
        alt: 'googlePlay Icon',
        link: ''
      },
      {
        applicationImg: '../../../img/application/huaweiApp.png',
        alt: 'huawei Icon',
        link: ''
      },
    ],
  socialImg:
    [
      {
        applicationImg: '',
        alt: '',
        link: ''
      },
      {
        applicationImg: '',
        alt: '',
        link: ''
      }, {
        applicationImg: '',
        alt: '',
        link: ''
      },
      {
        applicationImg: '',
        alt: '',
        link: ''
      },
      {
        applicationImg: '',
        alt: '',
        link: ''
      }
    ]
}
export const footerData: footerCategoryDataType[] =
  [
    {
      header: 'สำหรับผู้ใช้ Wongnai',

      linkText:
        [
          {
            link: '####',
            insideText: 'เกี่ยวกับ Wongnai Community'
          },
          {
            link: '####',
            insideText: 'ระดับของผู้ใช้ Wongnai'
          },
          {
            link: '####',
            insideText: 'เกี่ยวกับ Wongnai Elite'
          },
          {
            link: '####',
            insideText: 'ตารางอันดับของผู้ใช้งาน'
          },
          {
            link: '####',
            insideText: 'แนวทางปฏิบัติของผู้ใช้งาน'
          }
        ]
    },
    {
      header: 'สำหรับร้านหรือธุรกิจ',

      linkText:
        [
          {
            link: '####',
            insideText: 'แจ้งเป็นเจ้าของร้าน'
          },
          {
            link: '####',
            insideText: 'ลงโฆษณากับ Wongnai'
          },
          {
            link: '####',
            insideText: 'ระบบจัดการร้านอาหาร (Wongnai POS)'
          },
          {
            link: '####',
            insideText: 'รับเดลิเวอรีผ่าน Wongnai x LINE MAN (Wongnai Merchant App)'
          },
          {
            link: '####',
            insideText: 'บทความเทคนิคการตลาด'
          }
        ]
    },
    {
      header: 'สำหรับสือมวลชน',

      linkText:
        [
          {
            link: '####',
            insideText: 'ข่าว Wongnai'
          },
          {
            link: '####',
            insideText: 'ปฏิฑินกิจกรรม Wongnai Event'
          },
          {
            link: '####',
            insideText: 'โลโก้ Wongnai และวิธีการใช้'
          }
        ]
    },
    {
      header: 'ร่วมงานกับเรา',

      linkText:
        [
          {
            link: '####',
            insideText: 'ตำแหน่งเปิดรับ'
          },
          {
            link: '####',
            insideText: 'Life@Wongnai'
          }
        ]
    },
    {
      header: 'เกี่ยวกับ Wongnai',
      linkText:
        [
          {
            link: '####',
            insideText: 'ประวัติบริษัท'
          },
          {
            link: '####',
            insideText: 'ติดต่อเรา'
          },
          {
            link: '####',
            insideText: 'ศูนย์ช่วยเหลือ'
          }
        ]
    }

  ]
