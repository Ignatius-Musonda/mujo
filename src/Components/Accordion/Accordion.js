import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-question"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
