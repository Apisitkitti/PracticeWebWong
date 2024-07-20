import * as data from "./sidebarData";
import { useState } from "react";

function ShopCategoryShowUp({ shopCategory }: { shopCategory: string[] }) {
  return (
    <div className="shop-category container " >
      {shopCategory.map((shopItem: string, index: number) =>
        <div key={index} >
          <input type="radio" name="shopCategoryRadio" />
          <label htmlFor="shopCategoryCheck">{shopItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  )
}
function RateShowUp({ rate }: { rate: number[] }) {
  return (
    <div className="rate container">
      <p>เรตติ้ง</p>
      {rate.map((rateItem: number, index: number) =>
        <div key={index}>
          <input type="radio" name="ratingRadio" value={rateItem} />
          <label htmlFor="ratingRadio">{rateItem.toFixed(1)} +</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  );
}
function DistanceShowUp({ distance }: data.DistancePropShowType) {
  const [placeHolderText, placeHolderControl] = useState('500 ม.')
  const [isOnButton, buttonAppearControl] = useState<boolean>(false);
  const handleChangeFollowOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    let value: string = event.currentTarget.value;
    placeHolderControl(value);
    buttonAppearControl(!isOnButton);
  }
  const handleButtonAppear = () => {
    buttonAppearControl(!isOnButton);
  }
  return (
    <div className="distanceNum container">
      <p>ค้นหาตามระยะห่างจาก</p>
      <div className="placeblock textbox"><input type="text" placeholder="เช่น วัดพระแก้ว" /></div>
      <div className="distanceblock textbox" onClick={handleButtonAppear}>
        <input type="text" placeholder={placeHolderText} />
        <button id="dropdownIcon" >
          <img src="../img/dropdownSmall.png" alt="icon" className="icon" />
        </button>
      </div>
      {isOnButton && (
        <div className="button-group">
          {distance.map((distanceItem: data.DistanceType) =>
            <button id="destination-button" onClick={handleChangeFollowOption} value={distanceItem.distanceNum + ' ' + distanceItem.distanceSuffix} > {distanceItem.distanceNum} {distanceItem.distanceSuffix}</button>
          )}
        </div>
      )}
      <hr id="endLine" />
    </div >
  );
}
function ProvinceShowUp({ province }: { province: string[] }) {
  const filterProvinceToShow: string[] = province.slice(0, 6);
  const leftProvince = province.length - filterProvinceToShow.length;
  return (
    <div className="food-category container">
      <p>ย่าน และ เขต</p>
      {filterProvinceToShow.map((provinceItem: string, index: number) =>
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
function FoodShowUp({ food }: { food: string[] }) {
  const filterFoodToShow: string[] = food.slice(0, 6);
  const leftfood: number = food.length - filterFoodToShow.length;
  return (
    <div className="food-category container">
      <p>ประเภทอาหาร</p>
      {filterFoodToShow.map((foodItem: string, index: number) =>
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

function DiscountShowUp({ discount }: { discount: string[] }) {
  return (
    <div className="discount container">
      <p>ส่วนลด</p>
      {discount.map((discountItem: string, index: number) =>
        <div key={index}>
          <input type="checkbox" className="sidebarItem checkbox" name="discountCheck" />
          <label htmlFor='discountCheck'>{discountItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div >
  );
}
function PriceShowUp({ price }: { price: string[] }) {
  return (
    <div>
      <p>ราคา</p>
      {price.map((priceItem: string, index: number) =>
        <div key={index}>
          <input type="checkbox" name="priceCheckbox" />
          <label htmlFor="priceCheckbox">{priceItem}</label>
        </div>
      )}
      <hr id="endLine" />
    </div>
  );
}
function DealShowUp({ deal }: { deal: string[] }) {
  const filterDeal: string[] = deal.slice(0, 5);
  return (
    <div className="food-category container" >
      {filterDeal.map((dealItem: string, index: number) =>
        <div key={index} >
          <input type="checkbox" name="dealCheck" className="sidebarItem radio" value={dealItem} />
          <label htmlFor="dealCheck" className="sidebarItem text">{dealItem}</label>
        </div>
      )}
      <a href="##">ดูเพิ่มเติม</a>
    </div>
  );
}

export default function ForShowSidebar() {
  return (
    <>
      <ShopCategoryShowUp shopCategory={data.shopCategory} />
      <RateShowUp rate={data.ratingScore} />
      <DistanceShowUp distance={data.distance} />
      <ProvinceShowUp province={data.province} />
      <FoodShowUp food={data.foodCategory} />
      <DiscountShowUp discount={data.discount} />
      <PriceShowUp price={data.price} />
      <DealShowUp deal={data.deal} />
    </>

  );
}


