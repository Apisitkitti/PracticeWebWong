import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import CardComponent from './PictureCard/PictureCard';
import FoodCardComponent from './FoodProfileCard/foodProfileCard';
function Body() {
  return (
    <div className="body-container">
      <HeadLiner />
      <Sidebar />
      <CardComponent />
      <FoodCardComponent />
    </div>
  );
}

export default Body;