import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";

function FeedbackList({ item, removeFeedback }) {
  if (!item || item.length === 0) {
    return <p>No Feedback Recieved Yet</p>;
  }
  return (
    <div>
      <AnimatePresence>
        {item.map((item, i) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItem
                key={i}
                feedbackItem={item}
                removeFeedback={removeFeedback}
              ></FeedBackItem>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  item: PropTypes.array,
};

export default FeedbackList;
