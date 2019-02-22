import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
  h2{
    font-size: 25px;
    font-family: Didot, serif;
  }
  .author {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
}
  .author .img-container {
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
}
  .author .img-container img {
  width: 40px;
}
  .author span {
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}

` 

const Card = props => {
  const {card} = props
  return (
    <StyledCard>
      <h2>{card.headline}</h2>
      <div className="author">
        <div className="img-container">
          <img src={card.img} />
        </div>
        <span>By {card.author}</span>
      </div>
    </StyledCard>
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
