import React from 'react';
import useVideos from '../../hook/UseVideos';
import VideoList from '../../component/VideoList/VideoList';
import styles from "./Home.module.css";
import Banner from '../../component/Banner/Banner';
import BackgroundImage from '../../assets/img/BannerBackground.svg';
import CardImage from '../../assets/img/BannerCard.svg';

const Home = () => {
    const { videos, categories } = useVideos();

    return (
        <main>
            <Banner
            title="Front End"
            subtitle="Challenge React"
            text="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
            backgroundImage={BackgroundImage}
            cardImage={CardImage}
            ></Banner>
            <VideoList videos={videos} categories={categories} />
        </main>
    );
};

export default Home;
