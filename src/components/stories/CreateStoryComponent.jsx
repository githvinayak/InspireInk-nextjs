import React, { useState } from 'react';

const CreateStoryComponent = ({ userEmail, onStoryCreated }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/stories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, userEmail }),
    });
    const data = await res.json();
    onStoryCreated(data);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your story..."
      />
      <button type="submit">Post Story</button>
    </form>
  );
};

export default CreateStoryComponent;
