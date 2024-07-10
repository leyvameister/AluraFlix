import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import styles from './VideoList.module.css';

const VideoList = ({ categories, videos }) => {
  const groupedVideos = categories.map((category) => {
    const categoryVideos = videos.filter(video => video.category == category.id);
    return {
      category,
      videos: categoryVideos,
    };
  }).filter(group => group.videos.length > 0);

  return (
    <>
      {groupedVideos.map(group => (
        <section className={styles.videoSection} key={group.category.id}>
          <h2 className={styles.categoryTitle} style={{ backgroundColor: group.category.color }}>
            {group.category.name}
          </h2>
          <div className={styles.videoContainer}>
            {group.videos.map(video => (
              <VideoItem key={video.id} video={video} color={group.category.color} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default VideoList;
