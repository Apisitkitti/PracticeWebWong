import './rightSidebar.css'
import { rightSidebarContent } from './rightSideBarData'

function FirstBlockSidebar() {
  return (
    <div className="contentContainer">
      <p className="headText boldText">ค้นหาจากแผนที่</p>
      <div className='groupMapContent'>
        <button id='locationButton'>
          <img id='mapLocation' src="../../../img/locationWhite.png" alt="location" />
          ดูแผนที่
        </button>
      </div>
    </div>
  )
}
function RigtSideBarTemplateContent({ rightSidebarContent }: { rightSidebarContent: rightSidebarContent }) {
  return (
    <div className="contentContainer">
      <div className='headBar'>
        <p className="headText boldText">{rightSidebarContent.headTitle}</p>
      </div>
    </div>
  )
}


function RightSideBar() {
  return (
    <div className='rightSidebarGroup'>
      <FirstBlockSidebar />
    </div>
  )
}

export default RightSideBar;