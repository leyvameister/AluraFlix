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

  return {
    videos: state.videos,
    categories: state.categories,
    addVideo: (video) => dispatch({ type: 'ADD_VIDEO', payload: video }), //method: POST
    editVideo: (video) => dispatch({ type: 'EDIT_VIDEO', payload: video }), //method: PUT
    deleteVideo: (id) => dispatch({ type: 'DELETE_VIDEO', payload: id }), //method: DELETE
  };
};

export default useVideos;
