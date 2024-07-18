import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import CardComponent from './PictureCard/PictureCard';
export default function Body() {
  return (
    <div className="body-container">
      <HeadLiner />
      <Sidebar />
      <CardComponent />
    </div>
  );
}