import React, { useState } from 'react';
import useValidation from '../../hook/UseValidation';

const VideoForm = ({ initialData, onSubmit, categories, submitText, resetForm }) => {
  const [formData, setFormData] = useState(initialData);
  const { errors, validate } = useValidation(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      if (resetForm) {
        setFormData(initialData);
      }
    }
  };

  return (
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
      <button type="submit">{submitText}</button>
    </form>
  );
};

export default VideoForm;
