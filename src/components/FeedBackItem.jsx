import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedBackItem({ feedbackItem, removeFeedback }) {
  return (
    <>
      <Card>
        <div className="num-display">{feedbackItem.rating}</div>
        <div className="close">
          <button onClick={() => removeFeedback(feedbackItem)}>
            <FaTimes color="purple"></FaTimes>
          </button>
        </div>
        <div className="text-dispaly">{feedbackItem.text}</div>
      </Card>
    </>
  );
}

FeedBackItem.propTypes = {
  feedbackItem: PropTypes.object.isRequired
}


export default FeedBackItem;
