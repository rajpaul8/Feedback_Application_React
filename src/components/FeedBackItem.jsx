import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedBackItem({ feedback, removeFeedback, editFeedback }) {
  return (
    <>
      <Card>
        <div className="num-display">{feedback.rating}</div>
        <div>
          <button className="close" onClick={() => removeFeedback(feedback)}>
            <FaTimes color="purple"></FaTimes>
          </button>
          <button className="edit" onClick={() => editFeedback(feedback)}>
            <FaEdit color="purple"></FaEdit>
          </button>
        </div>
        <div className="text-dispaly">{feedback.text}</div>
      </Card>
    </>
  );
}

export default FeedBackItem;
