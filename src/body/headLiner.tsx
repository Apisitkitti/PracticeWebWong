import './headLiner.css'
function HeadLiner() {
  return (
    <div className="headLiner-container">
      <div className='headLiner-text-container'>
        <a href='##'> หน้าแรก </a>
        <span className='slash'>/</span>
        <a href='##'> ร้านอาหาร </a>
        <span className='slash'>/</span>
        <a href='##'> ร้านอาหารและปริมณฑล </a>
        <span className='slash'>/</span>
        <span className='hl'> ค้นหาร้านอาหาร</span>
        <p className="text-header hl">ร้านอาหารยอดนิยม ในกรุงเทพและปริมณฑล</p>
      </div>
    </div>
  );
}

export default HeadLiner;