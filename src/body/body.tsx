import './bodySetup.css'
import HeadLiner from './headLiner';
import Sidebar from './sidebar/sidebar';
export default function Body() {
  return (
    <div className="body-container">
      <HeadLiner />
      <Sidebar />
    </div>
  );
}