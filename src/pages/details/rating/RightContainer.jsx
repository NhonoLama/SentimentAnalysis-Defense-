import React, { useState } from 'react';
import Comment from './Comment'; // Import the new Comment component

const RightContainer = ({ profiles, isVisible, onToggle }) => {
  const [itemsToShow, setItemsToShow] = useState(3);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <div className={`container right-container ${isVisible ? 'expanded' : ''}`}>
      <div className="rating-value">80%</div>
      <a
        href="#"
        className="comment-link"
        onClick={(e) => {
          e.preventDefault();
          onToggle(); // Toggle only this container
        }}
      >
        Comment
      </a>
      {isVisible && (
        <Comment 
          profiles={profiles} 
          itemsToShow={itemsToShow} 
          loadMoreItems={loadMoreItems} 
        />
      )}
    </div>
  );
};

export default RightContainer;
