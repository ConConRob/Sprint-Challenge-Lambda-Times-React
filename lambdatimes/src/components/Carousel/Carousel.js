import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPos: 0,
    }
  }
  componentDidMount(){
    
  }

  leftClick = () => {
    this.setState(curState => {
      const curPos = curState.currentPos
      const nextPos = curPos===0? carouselData.length-1: curPos-1;
      return {
        currentPos: nextPos,
      } 
    })
  }

  rightClick = () => {
    this.setState(curState => {
      const curPos = curState.currentPos
      const nextPos = curPos===carouselData.length-1? 0: curPos+1;
      return {
        currentPos: nextPos,
      } 
    })
  }

  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img 
          src={carouselData[this.state.currentPos]} 
          alt="carousel"
        />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}