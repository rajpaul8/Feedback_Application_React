import React from "react";
import Card from "./shared/Card";
import { useState, useContext } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const { addFeedBack } = useContext(FeedbackContext);
  const handleTextChange = (e) => {
    e.preventDefault();
    // Set message and disable button if char <10
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Review must contain at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedbackItem = {
        text,
        rating,
      };
      addFeedBack(newFeedbackItem);
      setText("");
    }
  };
  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate our service with us?</h2>
          {/* @todo - Rating Service Ratio Button Option To be Added */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Write a review"
              onChange={handleTextChange}
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}

          <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
