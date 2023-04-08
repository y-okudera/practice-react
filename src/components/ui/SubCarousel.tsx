import React from 'react';

type Props = {
  items: string[];
  itemWidth?: number;
};

const SubCarousel: React.FC<Props> = ({ items, itemWidth = 300 }) => {

  return (
    <div style={{ marginBottom: '32px', width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 style={{ margin: 0 }}> </h2>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', overflowX: 'scroll', paddingBottom: '8px' }} >
          {items.map((item, index) => (
            <div key={index} style={{ marginRight: '16px', flexShrink: 0, width: `${itemWidth}px`, position: 'relative' }}>
              <img src={item} alt={`SubCarousel ${index}`} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCarousel;
