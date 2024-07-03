import * as data from "./sidebarData";
import * as show from "./sidebarShow";

import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <show.ShopCategoryShowUp shopCategory={data.shopCategory} />
      <show.RateShowUp rate={data.ratingScore} />
      <show.DistanceShowUp distance={data.distance} />
      <show.ProvinceShowUp province={data.province} />
      <show.FoodShowUp food={data.foodCategory} />
      <show.DiscountShowUp discount={data.discount} />
      <show.PriceShowUp price={data.price} />
      <show.DealShowUp deal={data.deal} />
    </div>

  );
}