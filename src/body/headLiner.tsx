import './headLiner.css'

const HeadLiner = () => {
  return (
    <div className="headLiner-container">
      <div className='headLiner-text-container'>
        <div className='linkTextGroup'>
          <a href='##'> หน้าแรก </a>
          <span className='slash'>/</span>
          <a href='##'> ร้านอาหาร </a>
          <span className='slash'>/</span>
          <a href='##'> ร้านอาหารในกรุงเทพและปริมณฑล </a>
          <span className='slash'>/</span>
          <span className='hl'> ค้นหาร้านอาหาร</span>
        </div>
        <p className="text-header hl">ร้านอาหาร ยอดนิยม ในกรุงเทพและปริมณฑล</p>
      </div>
    </div>
  );
}

export default HeadLiner;