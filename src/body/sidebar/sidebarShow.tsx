import * as data from "./sidebarData";
import { create } from "zustand";
const ShopCategoryShowUp = ({ shopCategory }: { shopCategory: string[] }) => {
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
const RateShowUp = ({ rate }: { rate: number[] }) => {
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

interface distanceShowUpNeedStore {
  placeHolderDistanceText: string,
  isDistanceButtonClick: boolean,
  setIsDistanceClick: () => void,
  placeHolderChange: (newText: string) => void
}
const useDistanceShowUp = create<distanceShowUpNeedStore>()((set) => ({
  placeHolderDistanceText: '500 ม.',
  isDistanceButtonClick: false,

  setIsDistanceClick: () => set((state) => (
    {
      isDistanceButtonClick: state.isDistanceButtonClick = !state.isDistanceButtonClick
    })),
  placeHolderChange: (newText) => set((state) => ({
    placeHolderDistanceText: state.placeHolderDistanceText = newText,
    isDistanceButtonClick: state.isDistanceButtonClick = !state.isDistanceButtonClick
  }))
}))


const DistanceShowUp = ({ distance }: data.DistancePropShowType) => {
  const { placeHolderDistanceText, isDistanceButtonClick, setIsDistanceClick, placeHolderChange } = useDistanceShowUp()
  return (
    <div className="distanceNum container">
      <p>ค้นหาตามระยะห่างจาก</p>
      <div className="placeBlock textboxPlace  "><input type="text" placeholder="เช่น วัดพระแก้ว" /></div>
      <div className="distanceblock textbox" onClick={setIsDistanceClick}>
        <input type="text" placeholder={placeHolderDistanceText} />
        <button id="dropdownIcon" >
          <img src="../img/dropdownSmall.png" alt="icon" className="icon" />
        </button>
      </div>
      {isDistanceButtonClick && (
        <div className="button-group">
          {distance.map((distanceItem: data.DistanceType) =>
            <button id="destination-button" onClick={() => placeHolderChange(distanceItem.distanceNum + ' ' + distanceItem.distanceSuffix)} value={distanceItem.distanceNum + ' ' + distanceItem.distanceSuffix} > {distanceItem.distanceNum} {distanceItem.distanceSuffix}</button>
          )}
        </div>
      )}
      <hr id="endLine" />
    </div >
  );
}
const ProvinceShowUp = ({ province }: { province: string[] }) => {
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
      <a className="moreItem" href="##">ดูเพิ่มเติม ({leftProvince} ย่าน)</a>
      <hr id="endLine" />
    </div>
  );
}
const FoodShowUp = ({ food }: { food: string[] }) => {
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
      <a className='moreItem' href="###">ดูเพิ่มเติม ({leftfood} ประเภท)</a>
      <hr id="endLine" />
    </div>
  );
}

const DiscountShowUp = ({ discount }: { discount: string[] }) => {
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
const PriceShowUp = ({ price }: { price: string[] }) => {
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
const DealShowUp = ({ deal }: { deal: string[] }) => {
  const filterDeal: string[] = deal.slice(0, 5);
  return (
    <div className="food-category container" >
      {filterDeal.map((dealItem: string, index: number) =>
        <div key={index} >
          <input type="checkbox" name="dealCheck" className="sidebarItem radio" value={dealItem} />
          <label htmlFor="dealCheck" className="sidebarItem text">{dealItem}</label>
        </div>
      )}
      <a className='moreItem' href="##">ดูเพิ่มเติม</a>
    </div>
  );
}

const ForShowSidebar = () => {
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
export default ForShowSidebar;


