import './rightSidebar.css'

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



function RightSideBar() {
  return (
    <div className='rightSidebarGroup'>
      <FirstBlockSidebar />
    </div>
  )
}

export default RightSideBar;