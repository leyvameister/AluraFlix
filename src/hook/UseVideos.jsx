import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const useVideos = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('http://localhost:3000/videos');
      const data = await response.json();
      dispatch({ type: 'SET_VIDEOS', payload: data });
    };

    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      dispatch({ type: 'SET_CATEGORIES', payload: data });
    };

    fetchVideos();
    fetchCategories();
  }, [dispatch]);

  const addVideo = async (video) => {
    const response = await fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    const data = await response.json();
    dispatch({ type: 'ADD_VIDEO', payload: data });
  };

  const editVideo = async (video) => {
    const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    const data = await response.json();
    dispatch({ type: 'EDIT_VIDEO', payload: data });
  };

  const deleteVideo = async (id) => {
    await fetch(`http://localhost:3000/videos/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: 'DELETE_VIDEO', payload: id });
  };


  return {
    videos: state.videos,
    categories: state.categories,
    addVideo,
    editVideo,
    deleteVideo
  };
};

export default useVideos;
