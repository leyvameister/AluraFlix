import React, { useState } from 'react';
import useVideos from '../hook/UseVideos';

const NewVideo = () => {
  const { addVideo, categories } = useVideos();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [imageurl, setImageurl] = useState('');
  const [videourl, setVideourl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = {
      name,
      category: parseInt(category),
      imageurl,
      videourl,
      description,
    };
    addVideo(newVideo);
    setName('');
    setCategory('');
    setImageurl('');
    setVideourl('');
    setDescription('');
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
        <input
          value={imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          placeholder="Image URL"
        />
        <input
          value={videourl}
          onChange={(e) => setVideourl(e.target.value)}
          placeholder="Video URL"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
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
