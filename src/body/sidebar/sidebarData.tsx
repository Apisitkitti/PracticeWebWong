export const shopCategory: string[] =
  [
    'ร้านอาหาร', 'ร้านเสริมสวย และ สปา', 'ที่พัก', 'สถานที่ท่องเที่ยว'
  ]

export const ratingScore: number[] =
  [
    3.5, 4.0
  ]
export type distanceType =
  {
    distanceNum: number;
    distanceSuffix: string;
  }
export const distance: distanceType[] =
  [
    {
      distanceNum: 500,
      distanceSuffix: 'ม.'
    },
    {
      distanceNum: 1,
      distanceSuffix: 'กม.'
    },
    {
      distanceNum: 3,
      distanceSuffix: 'กม.'
    },
    {
      distanceNum: 5,
      distanceSuffix: 'กม.'
    },
    {
      distanceNum: 10,
      distanceSuffix: 'กม.'
    },
    {
      distanceNum: 25,
      distanceSuffix: 'กม.'
    },
    {
      distanceNum: 50,
      distanceSuffix: 'กม.'
    }
  ]





export const province: string[] =
  [
    'จตุจักร', 'ประเวศ', 'บางกะปิ', 'ลาดกระบัง', 'บางเขน', 'บางแค', 'สายไหม', 'คลองสามวา', 'บางขุนเทียน',
    'วัฒนา', 'ห้วยขวาง', 'วังทองหลาง', 'ลาดพร้าว', 'ดอนเมือง', 'หนองแขม', 'สวนหลวง', 'ปทุมวัน', 'ดินแดง',
    'บึงกุ่ม', 'พระนคร', 'มีนบุรี', 'บางนา', 'คลองเตย', 'ภาษีเจริญ', 'บางกอกน้อย', 'ธนบุรี', 'บางซื่อ', 'ตลิ่งชัน',
    'บางบอน', 'หลักสี่', 'บางพลัด', 'คันนายาว', 'จอมทอง', 'ทุ่งครุ', 'หนองจอก', 'พระโขนง', 'บางรัก', 'ราชเทวี',
    'พญาไท', 'ทวีวัฒนา', 'สาทร', 'อ่อนนุช', 'สะพานสูง', 'ดุสิต', 'ยานนาวา', 'คลองสาน', 'ราษฎร์บูรณะ', 'บางคอแหลม', 'ห้วยขวาง/รัชดา',

    'บางกอกใหญ่', 'เพชรเกษม', 'ป้อมปราบศัตรูพ่าย', 'สัมพันธวงศ์', 'ประชาชื่น - วงศ์สว่าง', 'รามอินทรา', 'เยาวราช',
    'บางเขน - หลักสี่ - แจ้งวัฒนะ', 'สุขาภิบาล 1, 2, 3', 'ศรีนครินทร์', 'คลองสาน - เจริญนคร - ตากสิน', 'เจริญกรุง - ถนนตก - หัวลำโพง',
    'เกษตร - นวมินทร์', 'พระราม 2', 'ติวานนท์', 'บรรทัดทอง', 'รามคำแหง - ลำสาลี', 'จุฬาลงกรณ์', 'สยาม', 'รัชดา - ห้วยขวาง', 'สามย่าน',
    'เลียบทางด่วนรามอินทรา', 'วังหิน - โชคชัย 4', 'ดินแดง - ประชาสงเคราะห์', 'พระราม 3', 'เสนา - รัชโยธิน', 'พร้อมพงษ์', 'คลองตัน', 'ปิ่นเกล้า', 'ถนนจันทน์', 'ทองหล่อ', 'วงเวียนใหญ่', 'พระราม 5',
    'อนุสาวรีย์ชัยสมรภูมิ - รางน้ำ', 'ลาดปลาเค้า', 'สาทร - นราธิวาส', 'อารีย์', 'yaowarat - special', 'สีลม', 'เพชรบุรีตัดใหม่', 'จตุจักร - กำแพงเพชร - หมอชิต',
    'อโศก', 'ถนนจันทน์ - เซ็นต์หลุยส์', 'ราชประสงค์', 'พระราม 9', 'อุดมสุข', 'นราธิวาสราชนครินทร์', 'เอกมัย', 'วัชรพล',

    'สาธุประดิษฐ์', 'ท่าพระจันทร์ - วังบูรพา', 'สะพานใหม่', 'เอแบค', 'สะพานควาย', 'ราชวัตร - ศรีย่าน', 'ตลาดพลู', 'เหม่งจ๋าย', 'ชิดลม', 'คลองถม - วรจักร - ยศเส', 'นิด้า - เสรีไทย',
    'พระราม 4', 'บางรัก', 'ท่าพระ', 'พัฒนาการ', 'ประตูน้ำ', 'สุทธิสาร', 'สามเสน', 'สำโรง', 'นานา', 'หลานหลวง', 'ทาวน์อินทาวน์', 'บางขุนนนท์', 'งามวงศ์วาน - พงษ์เพชร', 'วังหลัง',
    'สวนหลวง ร.9', 'นางเลิ้ง', 'พระราม 8', 'หลังสวน', 'หมู่บ้านสัมมากร', 'เจริญกรุง', 'เทเวศน์', 'ท่าพระอาทิตย์ - บางลำภู', 'เสาชิงช้า', 'เพลินจิต', 'ข้าวสาร', 'เกาะเสม็ด', 'ท่าดินแดง',
    'แม้นศรี - ยศเส', 'บ้านหม้อ', 'ราษฎร์บูรณะ - สุขสวัสดิ์', 'เจริญนคร', 'ท่าพระจันทร์', 'ซอยนานา เยาวราช', 'ราชปรารภ', 'ทะเล', 'สี่พระยา', 'ร่มเกล้า', 'ราชพฤกษ์'
  ]
export const foodCategory: string[] =
  [
    'อาหารตามสั่ง', 'อาหารจานเดี่ยว', 'ก๋วยเตี๋ยว', 'ของหวาน', 'เครื่องดื่ม/น้ำผลไม้', 'เบเกอรี/เค้ก', 'ปิ้งย่าง',
    'ฟาสด์ฟู้ด/จานด่วน', 'อาหารทะเล', 'ชานมไข่มุก', 'อาหารเช้า', 'สเต๊ก', 'อาหารคลีน/สลัด', 'ชาบู/สุกี้ยากี้/หม้อไฟ', 'ไอศกรีม', 'พิซซ่า',
    'หมูกระทะ', 'เบอร์เกอร์', 'ติ่มซำ', 'บุฟเฟ่ต์', 'ซูชิ', 'อาหารมังสวิรัติ', 'อาหารเจ', 'ราเมง'
  ]
export const discount: string[] =
  [
    'Wongnai', 'ลูกค้าเซเรเนด', 'UOB', 'GSB', 'ลูกค้าเอไอเอส', 'Shell ClubSmart'
  ]
export const deal: string[] =
  [
    'ดีลสุดคุ้ม', 'เดลิเวอรี', 'เปิดตอนนี้', 'ร้านเปิดใหม่', 'ที่จอดรถ', '..'
  ]
export const price: string[] =
  [
    '฿ ถูกกว่า 100', '฿฿ 100-250', '฿฿฿ 251-500', '฿฿฿฿ 500+', '฿฿฿฿฿฿ 1000+',
  ]




