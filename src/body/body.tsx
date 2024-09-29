import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import CardComponent from './PictureCard/PictureCard';
import FoodCardComponent from './FoodProfileCard/foodProfileCard';
import RightSideBar from './rightSideBar/rightSidebar';
import { useHeaderStore } from '../header/headerState';
const Body = () => {
  const { setPlaceHolder, disappearAllInterface } = useHeaderStore()
  return (
    <div className="body-container" id='body' onClick={() => { disappearAllInterface(); setPlaceHolder('กรุงเทพและ...') }}>
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
    </div >
  );
}

export default Body;