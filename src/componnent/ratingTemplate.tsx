

const RatingScore = ({ score }: { score: number }) => {
  return (
    <div className="ratingIcon">
      <span id='scoreText'>{score.toFixed(1)} </span>
      <span className='star'>★</span>
    </div>
  )
}
export default RatingScore