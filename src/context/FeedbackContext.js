import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is from context 2",
      rating: 9,
    },
  ]);
  //Edit existing feedback item form
  const [feedbackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });
  const editFeedback = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };
  //Delete Feedback
  const removeFeedback = (item) => {
    if (window.confirm("Are you sure you want to delete>")) {
      setFeedback(
        feedback.filter((e) => {
          return e !== item;
        })
      );
    }
  };
  //Add Feedback
  const addFeedBack = (newFeedbackItem) => {
    newFeedbackItem.id = uuidv4();
    setFeedback([newFeedbackItem, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        removeFeedback: removeFeedback,
        addFeedBack: addFeedBack,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
