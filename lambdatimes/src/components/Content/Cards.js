import React, { Component } from 'react';
import Card from './Card';
import PT from 'prop-types';
import styled from 'styled-components';
const Cards = props => {
  const {cards} = props
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
        cards.map(card=> <Card key={card.headline} card={card}/>)    
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PT.array.isRequired,
}
export default Cards;