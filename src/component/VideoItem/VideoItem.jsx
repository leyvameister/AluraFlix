import React, { useState } from 'react';
import Modal from 'react-modal';
import useVideos from '../../hook/UseVideos';
import VideoForm from '../VideoForm/VideoForm';

const VideoItem = ({ video }) => {
  const { editVideo, deleteVideo, categories } = useVideos();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditVideo = (data) => {
    editVideo(data);
    setModalIsOpen(false);
  };

  const category = categories.find(cat => cat.id === video.category);
  const categoryName = category ? category.name : 'Unknown Category';

  return (
    <div style={{ border: "1px solid green" }}>
      <h3>{video.name}</h3>
      <button onClick={() => setModalIsOpen(true)}>Edit</button>
      <button onClick={() => deleteVideo(video.id)}>Delete</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <VideoForm
          initialData={video}
          onSubmit={handleEditVideo}
          categories={categories}
          submitText="Save"
        />
        <button type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default VideoItem;
