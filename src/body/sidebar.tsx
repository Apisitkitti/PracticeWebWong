export default function Sidebar() {
  return (

    <div className="sidebar-container">
      <form>
        <input type="radio" name="restuarant-category" value='restuarant' />
        <label htmlFor="restuarant-category">ร้านอาหาร</label>
        <input type="radio" name="beautyAndSpa-catagory" value='beautyAndSpa' />
        <label htmlFor="beautyAndSpa">ร้านเสริมสวย และ สปา</label>
        <input type="radio" name="hotel-category" value='hotel' />
        <label htmlFor="hotel-category">ที่พัก</label>
        <input type="radio" name="tourist" value='tourist' />
        <label htmlFor="tourist">สถานที่ท่องเที่ยว</label>
        <hr />
      </form>

    </div>
  );
}