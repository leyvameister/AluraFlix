import React from 'react';
import useVideos from '../../hook/UseVideos';
import VideoList from '../../component/VideoList/VideoList';

const Home = () => {
    const { videos, categories } = useVideos();

    return (
        <div>
            <VideoList videos={videos} categories={categories} />
        </div>
    );
};

export default Home;
