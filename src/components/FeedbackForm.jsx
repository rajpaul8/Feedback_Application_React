import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

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
  return (
    <>
      <Card>
        <form>
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
                  {message && <div className="message">{ message }</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
