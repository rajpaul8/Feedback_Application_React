import React from 'react'
import PropTypes from "prop-types";

function FeedbackStats({ item }) {
  // Calc ratings average
  let avg = item.reduce((acc, cur) => {
    return (acc + cur.rating);
  }, 0) / item.length;
  avg = avg.toFixed(1).replace(/[.,]0$/,'');
  return (
    <>
      <div className="feedback-stats">
        <h4>{item.length} Reviews</h4>
        <h4>Avergae Rating: {isNaN(avg)? 0 : avg}</h4>
      </div>
    </>
  );
}
FeedbackStats.propTypes = {
  item: PropTypes.array.isRequired
}
export default FeedbackStats