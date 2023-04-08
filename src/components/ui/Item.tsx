import React from 'react';

type Props = {
  imageSrc: string;
  title: string;
  onClick?: () => void;
};

const Item: React.FC<Props> = ({ imageSrc, title, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={imageSrc} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Item;
