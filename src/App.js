import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
// Get Data as global state
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const removeFeedback = (item) => {
    if (window.confirm("Are you sure you want to delete>")) {
      setFeedback(
        feedback.filter((e) => {
          return e !== item;
        })
      );
    }
  };
  const addFeedBack = (newFeedbackItem) => {
    newFeedbackItem.id = uuidv4();
    setFeedback([newFeedbackItem, ...feedback]);
  };

  return (
    <>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm addFeedBack={addFeedBack} />
                  <FeedbackStats item={feedback} />
                  <FeedbackList
                    item={feedback}
                    removeFeedback={removeFeedback}
                  />
                </>
              }
            ></Route>

             <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
