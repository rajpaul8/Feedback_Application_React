import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, removeFeedback, editFeedback } =
    useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Recieved Yet</p>;
  }
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItem
                key={item.id}
                feedback={item}
                removeFeedback={removeFeedback}
                editFeedback={editFeedback}
              ></FeedBackItem>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
