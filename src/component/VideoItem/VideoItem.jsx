import React, { useState } from 'react';
import Modal from 'react-modal';
import useVideos from '../../hook/UseVideos';
import VideoForm from '../VideoForm/VideoForm';
import styles from './VideoItem.module.css'
import editButton from '../../assets/img/EditButton.svg';
import deleteButton from '../../assets/img/DeleteButton.svg';
import modalVideoFormStyles from './ModalVideoForm.module.css';

const VideoItem = ({ video, color }) => {
  const { editVideo, deleteVideo, categories } = useVideos();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditVideo = (data) => {
    editVideo(data);
    setModalIsOpen(false);
  };

  const category = categories.find(cat => cat.id === video.category);
  const categoryName = category ? category.name : 'Unknown Category';

  return (
    <div className={styles.video} style={{ border: `2px solid ${color}` }}>
      <a href={video.videourl} target="_blank" rel="noopener noreferrer">
        <img style={{ borderBottom: `2px solid ${color}` }} className={styles.image} src={video.imageurl} alt="image" />
      </a>
      <h5 className={styles.title} >{video.name}</h5>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setModalIsOpen(true)}>
          <img src={editButton} alt="edit" />Edit
        </button>
        <button className={styles.button} onClick={() => deleteVideo(video.id)}>
          <img src={deleteButton} alt="delete" />Delete
        </button>
      </div>
      <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2 className={styles.modalTitle} >Edit Video</h2>
        <VideoForm
          initialData={video}
          onSubmit={handleEditVideo}
          categories={categories}
          submitText="Save"
          styles={modalVideoFormStyles}
        />
        <div className={styles.cancelButtonContainer}>
          <button className={styles.cancelButton} type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default VideoItem;
