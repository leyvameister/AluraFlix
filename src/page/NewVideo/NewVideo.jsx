import React from 'react';
import useVideos from '../../hook/UseVideos';
import VideoForm from '../../component/VideoForm/VideoForm';

const NewVideo = () => {
  const { addVideo, categories } = useVideos();

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
  };

  return (
    <div>
      <h1>New Video</h1>
      <VideoForm
        initialData={initialData}
        onSubmit={handleAddVideo}
        categories={categories}
        submitText="Add Video"
        resetForm={true}
      />
    </div>
  );
};

export default NewVideo;
