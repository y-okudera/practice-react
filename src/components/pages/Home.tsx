import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"
import Carousel from '../ui/Carousel';
import SubCarousel from '../ui/SubCarousel';

const items = [
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 1' },
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 2' },
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 3' },
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 4' },
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 5' },
  { imageSrc: 'https://via.placeholder.com/150x210', title: 'Title 6' },
];

const images = [
  'http://placehold.jp/3d4070/ffffff/525x375.png',
  'http://placehold.jp/00ffdd/ff0000/525x375.png',
  'http://placehold.jp/33ddaa/00ff00/525x375.png',
  'http://placehold.jp/88EEEE/0000ff/525x375.png',
  'http://placehold.jp/99aa11/ff00ff/525x375.png',
  'http://placehold.jp/3d4070/ffffff/525x375.png',
  'http://placehold.jp/00ffdd/ff0000/525x375.png',
  'http://placehold.jp/33ddaa/00ff00/525x375.png',
  'http://placehold.jp/88EEEE/0000ff/525x375.png',
  'http://placehold.jp/99aa11/ff00ff/525x375.png',
];

const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <div >
        <Helmet>
          <title>ホーム</title>
        </Helmet>
        <h1>ホーム</h1>
        <p>Window width: {windowWidth}px </p>

        <SubCarousel items={images} />

        <Carousel title="カルーセル1" items={items.slice(0, 6)} />
        <Carousel title="カルーセル2" items={items.slice(0, 6)} />
        <Carousel title="カルーセル3" items={items.slice(0, 6)} />
        <Carousel title="カルーセル4" items={items.slice(0, 6)} />
        <Carousel title="カルーセル5" items={items.slice(0, 6)} />
      </div>
    );
  }

export default Home;
