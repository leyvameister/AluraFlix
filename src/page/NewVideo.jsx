import React, { useState } from 'react';
import useVideos from '../hook/UseVideos';

const NewVideo = () => {
  const { addVideo, categories } = useVideos();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { id: Date.now(), name, category: parseInt(category) };
    addVideo(newVideo);
    setName('');
    setCategory('');
  };

  return (
    <div>
      <h1>New Video</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Video Name"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default NewVideo;
