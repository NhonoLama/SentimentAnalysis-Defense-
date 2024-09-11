import React from 'react';

// The Comment component receives profile data, load more function, and item visibility state as props
const Comment = ({ profiles, itemsToShow, loadMoreItems }) => {
  return (
    <div className="dropdown-content">
      {profiles.slice(0, itemsToShow).map((profile, index) => (
        <div key={index} className="dropdown-item">
          <img src={profile.icon} alt="Profile Icon" className="profile-icon" />
          <div className="profile-info">
            <span className="profile-name">{profile.name}</span>
            <p className="profile-comment">{profile.comment}</p>
          </div>
        </div>
      ))}
      {itemsToShow < profiles.length && (
        <a
          href="#"
          className="load-more"
          onClick={(e) => {
            e.preventDefault();
            loadMoreItems();
          }}
        >
          Load More.....
        </a>
      )}
    </div>
  );
};

export default Comment;
