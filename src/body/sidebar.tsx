const foodCategory: string[] =
  [
    'อาหารตามสั่ง', 'อาหารจานเดี่ยว', 'ก๋วยเตี๋ยว', 'ของหวาน', 'เครื่องดื่ม/น้ำผลไม้', 'เบเกอรี/เค้ก', 'อาหารไทย'
  ]


function FoodShowUp({ food }: { food: string[] }) {
  return (
    <div>
      {food.map((foodItem, index) =>
        <div key={index}>
          <input type="checkbox" name="foodCheck" className="sidebarItem radio" />
          <label htmlFor="foodCheck">{foodItem}</label>
        </div>
      )}
    </div>
  );
}


export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div>
        <input type="radio" name="category" value='restuarant' className="sidebarItem radio" />
        <label htmlFor="category" className="sidebarItem text">ร้านอาหาร</label>
        <input type="radio" name="category" value='beautyAndSpa' className="sidebarItem radio" />
        <label htmlFor="category" className="sidebarItem text" >ร้านเสริมสวย และ สปา</label>
        <input type="radio" name="category" value='hotel' className="sidebarItem radio" />
        <label htmlFor="category" className="sidebarItem text" >ที่พัก</label>
        <input type="radio" name="category" value='tourist' className="sidebarItem radio" />
        <label htmlFor="category" className="sidebarItem text">สถานที่ท่องเที่ยว</label>
        <hr />
      </div>
      <div>
        <legend>เรตติ้ง</legend>
        <input type="radio" name="score" value='3.5' />
        <label htmlFor="score">3.5</label>
        <input type="radio" name="score" value='4.5' />
        <label htmlFor="score">4.5</label>
        <hr />
      </div>
      <div>
        <legend>ค้นหาตามระยะห่างจาก</legend>
        <div className="sidebar-content-container">
          <input type="text" className="place-input" placeholder="" />
        </div>
        <div className="sidebar-content-container">
          <input type="text" className="place-input" />
          <img src="../img/dropdownSmall.png" alt="small png" className="icon" />
        </div>
        <hr />
      </div>
      <div>
        <legend>ประเภทอาหาร</legend>
        <FoodShowUp food={foodCategory} />
        <hr />
      </div>

    </div>
  );
}