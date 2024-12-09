/* eslint-disable react/prop-types */


const Accordion = ({ currData, onToggle, isActive }) => {
  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{currData.question}</p>
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive && currData.answer}</p>
      </li>
    </>
  );
};

export default Accordion;
