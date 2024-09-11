import React, { useState } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import './style.scss'; // Ensure this path is correct

const Rating = () => {
  // Separate state for each container to manage their visibility independently
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  // Sample profiles data
  const profiles = [
    { icon: 'profile.png', name: 'John Doe', comment: 'This is a comment by John Doe.' },
    { icon: 'profile.png', name: 'Jane Smith', comment: 'This is a comment by Jane Smith.' },
    { icon: 'profile.png', name: 'Alice Johnson', comment: 'This is a comment by Alice Johnson.' },
    { icon: 'profile.png', name: 'Michael Brown', comment: 'This is a comment by Michael Brown.' },
    { icon: 'profile.png', name: 'Emily Davis', comment: 'This is a comment by Emily Davis.' },
    { icon: 'profile.png', name: 'Chris Wilson', comment: 'This is a comment by Chris Wilson.' },
    { icon: 'profile.png', name: 'David Lee', comment: 'This is a comment by David Lee.' },
    { icon: 'profile.png', name: 'Sarah Green', comment: 'This is a comment by Sarah Green.' },
    { icon: 'profile.png', name: 'Paul King', comment: 'This is a comment by Paul King.' },
    { icon: 'profile.png', name: 'Laura Adams', comment: 'This is a comment by Laura Adams.' }
  ];

  return (
    <div className="two-containers">
      <LeftContainer
        profiles={profiles}
        isVisible={isLeftVisible}
        onToggle={() => setIsLeftVisible(!isLeftVisible)} // Toggle only the left container
      />
      <RightContainer
        profiles={profiles}
        isVisible={isRightVisible}
        onToggle={() => setIsRightVisible(!isRightVisible)} // Toggle only the right container
      />
    </div>
  );
};

export default Rating;
