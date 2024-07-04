import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ categories, videos }) => {
  const groupedVideos = categories.map((category) => {
    const categoryVideos = videos.filter(video => video.category == category.id);
    return {
      category,
      videos: categoryVideos,
    };
  }).filter(group => group.videos.length > 0);

  return (
    <div>
      {groupedVideos.map(group => (
        <div key={group.category.id}>
          <h2>{group.category.name}</h2>
          {group.videos.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoList;
