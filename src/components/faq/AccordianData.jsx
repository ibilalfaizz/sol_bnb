import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordianData = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <div
        className="flex items-center justify-between py-[1rem] px-[0.8rem] cursor-pointer  hover:bg-gray-200"
        onClick={toggleAccordion}
      >
        <span className="text-[1rem]">{title}</span>
        <span className="text-[1rem]">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && <div className="p-4 bg-white ">{children}</div>}
    </div>
  );
};

export default AccordianData;
