import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
import PictureCard from './PictureCard/PictureCard';
import { pictureAndInformation } from './PictureCard/pictureCardData';
export default function Body() {
  return (
    <div className="body-container">
      <HeadLiner />
      <Sidebar />
      <PictureCard pictureAndInformation={pictureAndInformation} />
    </div>
  );
}