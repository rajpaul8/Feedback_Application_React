import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";

function FeedbackList({ item, removeFeedback }) {
  if (!item || item.length === 0) {
    return <p>No Feedback Recieved Yet</p>;
  }
  return (
    <div>
      {item.map((item, i) => {
        return (
          <FeedBackItem
            key={i}
            feedbackItem={item}
            removeFeedback={removeFeedback}
          ></FeedBackItem>
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  item: PropTypes.array
};

export default FeedbackList;
