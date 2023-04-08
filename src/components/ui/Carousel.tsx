import React from 'react';
import Item from './Item';

type Props = {
  title: string;
  items: {
    imageSrc: string;
    title: string;
  }[];
}

const Carousel: React.FC<Props> = ({ title, items }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <h2>{title}</h2>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {items.map((item, index) => (
          <div key={index} style={{ marginRight: '16px' }}>
            <Item
            imageSrc={item.imageSrc}
            title={item.title}
            onClick={() => alert(item.title + ' clicked!')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
