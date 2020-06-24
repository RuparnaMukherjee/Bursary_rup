import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimateOnScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      animate: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(function(){this.animate()}.bind(this),1000)
  }

  componentWillUnmount() { 
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = ()=>{
    this.animate()
  }

  animate = ()=>{
    let windowsPosition = window.scrollY+window.innerHeight
    let elementPosition = this.animatedRef.getBoundingClientRect().bottom
    if(this.props.offset)
      elementPosition = elementPosition + this.props.offset

    if(windowsPosition>elementPosition){
      if(this.props.onScreen && this.state.animate===false)
        this.props.onScreen()
      this.setState({animate: true})
    }
  }

  render() {
    return (
      <div ref={(el)=>this.animatedRef=el} className={`${this.props.defaultClass} ${(this.state.animate)? this.props.animatedClass :''}`}>
        {this.props.children}
      </div>
    )
  }
}

AnimateOnScreen.propTypes = {
  defaultClass: PropTypes.string.isRequired,
  animatedClass: PropTypes.string.isRequired
};

export { AnimateOnScreen }

AnimateOnScreen.propTypes = {
  defaultClass: PropTypes.string,
  animatedClass: PropTypes.string,
  onScreen: PropTypes.func,
  offset: PropTypes.number,
}