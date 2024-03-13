import React, { useState, useEffect } from 'react';

const StoriesComponent = ({ userEmail }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch(`/api/stories?userEmail=${userEmail}`);
      const data = await res.json();
      if (!res.ok) {
        const error = new Error(data.message);
        throw error;
      }
      setStories(data);
    };
    fetchStories();
  }, [userEmail]);

  return (
    <div>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

const Story = ({ story }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const expirationTime = new Date(story.createdAt).getTime() + 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const remaining = expirationTime - now;

    if (remaining > 0) {
      const interval = setInterval(() => {
        const newRemaining = expirationTime - new Date().getTime();
        setRemainingTime(newRemaining);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setRemainingTime(0);
    }
  }, [story.createdAt]);

  return (
    <div>
      <p>{story.content}</p>
      {remainingTime !== null && (
        <p>Time remaining: {formatTime(remainingTime)}</p>
      )}
    </div>
  );
};

const formatTime = (time) => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
};

export default StoriesComponent;