import React, { useEffect, useRef, useState } from 'react';
import useVideos from '../../hook/UseVideos';
import VideoForm from '../../component/VideoForm/VideoForm';
import styles from './NewVideo.module.css';
import newVideoFormStyles from './NewVideoForm.module.css';

const NewVideo = () => {
  const { addVideo, categories } = useVideos();
  const [successMessage, setSuccessMessage] = useState('');
  const successMessageRef = useRef(null);

  const initialData = {
    name: '',
    category: '',
    imageurl: '',
    videourl: '',
    description: '',
  };

  const handleAddVideo = (data) => {
    const newVideo = {
      ...data,
      category: parseInt(data.category),
    };
    addVideo(newVideo);
    setSuccessMessage('Video agregado');
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  useEffect(() => {
    if (successMessage && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [successMessage]);

  return (
    <div>
      <h1 className={styles.title}>CREATE VIDEO</h1>
      <VideoForm
        initialData={initialData}
        onSubmit={handleAddVideo}
        categories={categories}
        submitText="Add Video"
        resetForm={true}
        styles={newVideoFormStyles}
      />
      {successMessage && (
        <p ref={successMessageRef} className={styles.successMessage}>{successMessage}</p>
      )}
    </div>
  );
};

export default NewVideo;
