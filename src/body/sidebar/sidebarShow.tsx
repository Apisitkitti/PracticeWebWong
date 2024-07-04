import { distanceType } from "./sidebarData";
import { useState } from "react";
export function ShopCategoryShowUp({ shopCategory }: { shopCategory: string[] }) {
  return (
    <div className="shop-category container " >
      {shopCategory.map((shopItem, index) =>
        <div key={index} >
          <input type="radio" name="shopCategoryRadio" />
          <label htmlFor="shopCategoryCheck">{shopItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  )
}
export function RateShowUp({ rate }: { rate: number[] }) {
  return (
    <div className="rate container">
      <p>เรตติ้ง</p>
      {rate.map((rateItem, index) =>
        <div key={index}>
          <input type="radio" name="ratingRadio" value={rateItem} />
          <label htmlFor="ratingRadio">{rateItem.toFixed(1)} +</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  );
}
export function DistanceShowUp({ distance }: { distance: distanceType[] }) {
  const [placeHolderText, placeHolderControl] = useState('500 ม.')
  const handleChangeFollowOption = (event: any) => {
    let value: any = event.target.value;
    placeHolderControl(value);
  }
  return (
    <div className="distanceNum container">
      <p>ค้นหาตามระยะห่างจาก</p>
      <div className="placeblock textbox"><input type="text" placeholder="เช่น วัดพระแก้ว" /></div>
      <div className="distanceblock textbox"><input type="text" placeholder={placeHolderText} /></div>
      <select name="distance" onChange={handleChangeFollowOption}>
        {distance.map((distanceItem) =>
          <option value={distanceItem.distanceNum + ' ' + distanceItem.distanceSuffix} >{distanceItem.distanceNum} {distanceItem.distanceSuffix} </option>
        )}
      </select>
      <hr id="endLine" />
    </div>
  );
}
export function ProvinceShowUp({ province }: { province: string[] }) {
  const filterProvinceToShow: string[] = province.slice(0, 6);
  const leftProvince = province.length - filterProvinceToShow.length;
  return (
    <div className="food-category container">
      <p>ย่าน และ เขต</p>
      {filterProvinceToShow.map((provinceItem, index) =>
        <div key={index} >
          <input type="checkbox" name="provinceCheck" className="sidebarItem radio" value={provinceItem} />
          <label htmlFor="provinceCheck" className="sidebarItem text">{provinceItem}</label>
        </div>
      )}
      <a href="##">ดูเพิ่มเติม ({leftProvince} ย่าน)</a>
      <hr id="endLine" />
    </div>
  );
}
export function FoodShowUp({ food }: { food: string[] }) {
  const filterFoodToShow: string[] = food.slice(0, 6);
  const leftfood: number = food.length - filterFoodToShow.length;
  return (
    <div className="food-category container">
      <p>ประเภทอาหาร</p>
      {filterFoodToShow.map((foodItem, index) =>
        <div key={index}>
          <input type="checkbox" name="foodCheck" className="sidebarItem radio" value={foodItem} />
          <label htmlFor="foodCheck" className="sidebarItem text">{foodItem}</label>
        </div>
      )}
      <a href="###">ดูเพิ่มเติม ({leftfood} ประเภท)</a>
      <hr id="endLine" />
    </div>
  );
}

export function DiscountShowUp({ discount }: { discount: string[] }) {
  return (
    <div className="discount container">
      <p>ส่วนลด</p>
      {discount.map((discountItem, index) =>
        <div key={index}>
          <input type="checkbox" className="sidebarItem checkbox" name="discountCheck" />
          <label htmlFor='discountCheck'>{discountItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div >
  );
}
export function PriceShowUp({ price }: { price: string[] }) {
  return (
    <div>
      <p>ราคา</p>
      {price.map((priceItem, index) =>
        <div key={index}>
          <input type="checkbox" name="priceCheckbox" />
          <label htmlFor="priceCheckbox">{priceItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  );
}
export function DealShowUp({ deal }: { deal: string[] }) {
  const filterDeal: string[] = deal.slice(0, 5);
  return (
    <div className="food-category container" >
      {filterDeal.map((dealItem, index) =>
        <div key={index} >
          <input type="checkbox" name="dealCheck" className="sidebarItem radio" value={dealItem} />
          <label htmlFor="dealCheck" className="sidebarItem text">{dealItem}</label>
        </div>
      )}
      <a href="##">ดูเพิ่มเติม</a>
    </div>
  );
}
