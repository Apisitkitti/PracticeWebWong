import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import CardComponent from './PictureCard/PictureCard';
import FoodCardComponent from './FoodProfileCard/foodProfileCard';
import RightSideBar from './rightSideBar/rightSidebar';
function Body() {
  return (
    <div className="body-container">
      <HeadLiner />
      <Sidebar />
      <main>
        <CardComponent />
        <RightSideBar />
        <FoodCardComponent />
      </main>

    </div>
  );
}

export default Body;