import React from 'react';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  console.log(index);
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{`#${hex}`}</p>
    </article>
  );
};

export default SingleColor;
