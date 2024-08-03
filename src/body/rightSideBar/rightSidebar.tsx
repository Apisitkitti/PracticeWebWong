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
function RigtSideBarTemplateContent() {
  return (
    <div className="contentContainer">
      <div className='headBar'>
        <p className="headText boldText">{ }</p>
      </div>
      <div className='indsideRightSidebarContainer'>
        <div><img src="" alt="" /></div>
        <div className='textContainer'>
          <p><span className='boldText'>{ }</span></p>
        </div>
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