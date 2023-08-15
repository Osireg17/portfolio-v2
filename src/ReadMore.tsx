
import React, { useState } from "react";
import './Readmore.css';

interface Props {
    children: string;
    onToggle: () => void;
}


const ReadMore = ({children, onToggle}: Props) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
      onToggle();
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 100) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

export default ReadMore;