import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, deleteFeedback, editFeedback, isLoading } =
    useContext(FeedbackContext);
  
  if ( !isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Recieved Yet</p>;
  }
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
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
                removeFeedback={deleteFeedback}
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
