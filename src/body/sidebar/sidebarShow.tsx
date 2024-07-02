

export function FoodShowUp({ food }: { food: string[] }) {
  const filterFoodToShow: string[] = food.slice(0, 6);
  const leftfood: number = food.length - filterFoodToShow.length;
  return (
    <div>
      <legend>ประเภทอาหาร</legend>
      {filterFoodToShow.map((foodItem, index) =>
        <div key={index}>
          <input type="checkbox" name="foodCheck" className="sidebarItem radio" value={foodItem} />
          <label htmlFor="foodCheck">{foodItem}</label>
        </div>
      )}
      <a href="###">ดูเพิ่มเติม ({leftfood} ประเภท)</a>
      <hr />
    </div>
  );
}

export function ProvinceShowUp({ province }: { province: string[] }) {
  const filterProvinceToShow: string[] = province.slice(0, 6);
  const leftProvince = province.length - filterProvinceToShow.length;
  return (
    <div>
      <legend>ย่าน และ เขต</legend>
      {filterProvinceToShow.map((provinceItem, index) =>
        <div key={index}>
          <input type="checkbox" name="provinceCheck" className="sidebarItem radio" value={provinceItem} />
          <label htmlFor="provinceCheck">{provinceItem}</label>
        </div>
      )}
      <a href="##">ดูเพิ่มเติม ({leftProvince} ย่าน)</a>
      <hr />
    </div>
  );
}
