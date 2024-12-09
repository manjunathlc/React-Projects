import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import Accordion from "./Accordion";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((currEle) => {
          return (
            <Accordion
              key={currEle.id}
              currData={currEle}
              isActive={activeId === currEle.id}
              onToggle={() => {
                handleButton(currEle.id);
              }}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FAQ;
