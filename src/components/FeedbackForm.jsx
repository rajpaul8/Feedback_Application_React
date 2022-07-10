import React from 'react'
import Card from './shared/Card'
import { useState } from 'react';

function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        e.preventDefault();
        setText(e.target.value)     
    }
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
                      <button type="submit">Send</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm