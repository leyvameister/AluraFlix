import React, { useState } from 'react';
import Modal from 'react-modal';
import useVideos from '../hook/UseVideos';

const VideoItem = ({ video }) => {
  const { editVideo, deleteVideo, categories } = useVideos();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState(video);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo(formData);
    setModalIsOpen(false);
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
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            name="imageurl"
            value={formData.imageurl}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <input
            name="videourl"
            value={formData.videourl}
            onChange={handleInputChange}
            placeholder="Video URL"
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
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
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default VideoItem;
