import React, { useState } from 'react';
import Modal from 'react-modal';
import useVideos from '../hook/UseVideos';
import useValidation from '../hook/UseValidation';

const VideoItem = ({ video }) => {
  const { editVideo, deleteVideo, categories } = useVideos();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState(video);
  const { errors, validate } = useValidation(formData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      editVideo(formData);
      setModalIsOpen(false);
    }
  };

  const category = categories.find(cat => cat.id == video.category);
  const categoryName = category ? category.name : 'Unknown Category';

  return (
    <div>
      <h3>{video.name}</h3>
      <button onClick={() => setModalIsOpen(true)}>Edit</button>
      <button onClick={() => deleteVideo(video.id)}>Delete</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Image URL</label>
            <input
              name="imageurl"
              value={formData.imageurl}
              onChange={handleInputChange}
              placeholder="Image URL"
            />
            {errors.imageurl && <p>{errors.imageurl}</p>}
          </div>
          <div>
            <label>Video URL</label>
            <input
              name="videourl"
              value={formData.videourl}
              onChange={handleInputChange}
              placeholder="Video URL"
            />
            {errors.videourl && <p>{errors.videourl}</p>}
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
            {errors.description && <p>{errors.description}</p>}
          </div>
          <div>
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && <p>{errors.category}</p>}
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default VideoItem;
