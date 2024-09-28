import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import CardComponent from './PictureCard/PictureCard';
import FoodCardComponent from './FoodProfileCard/foodProfileCard';
import RightSideBar from './rightSideBar/rightSidebar';

const Body = () => {
  return (
    <div className="body-container" id='body'>
      <HeadLiner />
      <main className='mainContent'>
        <Sidebar />
        <div className='contentWrapper'>
          <CardComponent />
          <div className='secondContentWrapper'>
            <FoodCardComponent />
            <RightSideBar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;