import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Card = props => {
  const {card} = props
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PT.shape({
    headline: PT.string.isRequired,
    tab: PT.string.isRequired,
    img: PT.string.isRequired,
    author: PT.string.isRequired,
  }),
  
}
export default Card;
