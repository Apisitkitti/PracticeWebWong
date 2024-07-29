import './rightSidebar.css'
function FirstBlockSidebar() {
  return (
    <div className="contentContainer">
      <span className=" boldText">ค้นหาจากแผนที่</span>
      <div className='GroupMapContent'>
        <img src="" alt="" />
        <button>
          <img src="" alt="" />
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