export default function Sidebar() {
  return (

    <div className="sidebar-container">
      <form>
        <input type="radio" name="restuarant-category" value='restuarant' className="sidebarItem radio" />
        <label htmlFor="restuarant-category" className="sidebarItem text">ร้านอาหาร</label>
        <input type="radio" name="beautyAndSpa-catagory" value='beautyAndSpa' className="sidebarItem radio" />
        <label htmlFor="beautyAndSpa" className="sidebarItem text" >ร้านเสริมสวย และ สปา</label>
        <input type="radio" name="hotel-category" value='hotel' className="sidebarItem radio" />
        <label htmlFor="hotel-category" className="sidebarItem text" >ที่พัก</label>
        <input type="radio" name="tourist" value='tourist' className="sidebarItem radio" />
        <label htmlFor="tourist" className="sidebarItem text">สถานที่ท่องเที่ยว</label>
        <hr />
      </form>
      <form>
        <legend>เรตติ้ง</legend>
        <input type="radio" name="score" value='3.5' />
        <label htmlFor="restuarant-category">3.5</label>
        <input type="radio" name="beautyAndSpa-catagory" value='4.5' />
        <label htmlFor="beautyAndSpa">4.5</label>
        <hr />
      </form>
      <form>
        <legend>ค้นหาตามระยะห่างจาก</legend>
        <div className="sidebar-content-container">
          <input type="text" className="place-input" />
        </div>
        <div className="sidebar-content-container">
          <input type="text" className="place-input" />
          <img src="../img/dropdown.Small.png" alt="small png" className="icon" />
        </div>
        <hr />
      </form>

    </div>
  );
}