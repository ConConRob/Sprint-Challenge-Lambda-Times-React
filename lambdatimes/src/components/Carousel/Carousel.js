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
    this.setState(curState => ({currentPos: curState.currentPos-1}))
  }

  rightClick = () => {
    this.setState(curState => ({currentPos: curState.currentPos+1}))
  }

  // selectedImage = () => {
  //   return <img src={} style={{display: 'block'}} />
  // }
  
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