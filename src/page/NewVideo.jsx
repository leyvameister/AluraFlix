import React, { useState } from 'react';
import useVideos from '../hook/UseVideos';
import useValidation from '../hook/UseValidation';

const NewVideo = () => {
  const { addVideo, categories } = useVideos();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    imageurl: '',
    videourl: '',
    description: ''
  });

  const { errors, validate } = useValidation(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      const newVideo = {
        ...formData,
        category: parseInt(formData.category),
      };
      addVideo(newVideo);
      setFormData({
        name: '',
        category: '',
        imageurl: '',
        videourl: '',
        description: ''
      });
    }
  };

  return (
    <div>
      <h1>New Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Video Name"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Image URL</label>
          <input
            name="imageurl"
            value={formData.imageurl}
            onChange={handleChange}
            placeholder="Image URL"
          />
          {errors.imageurl && <p>{errors.imageurl}</p>}
        </div>
        <div>
          <label>Video URL</label>
          <input
            name="videourl"
            value={formData.videourl}
            onChange={handleChange}
            placeholder="Video URL"
          />
          {errors.videourl && <p>{errors.videourl}</p>}
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && <p>{errors.category}</p>}
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default NewVideo;
