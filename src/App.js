import Header from "./components/Header";
// Get Data as global state
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const removeFeedback = (item) => {
    if(window.confirm('Are you sure you want to delete>')){
      setFeedback(
        feedback.filter((e) => {
          return e !== item;
        })
      );
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackList item={feedback} removeFeedback={removeFeedback} />
      </div>
    </>
  );
}

export default App;
