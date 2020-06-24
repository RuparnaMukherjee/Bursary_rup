import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarOnScroll: 'navigation'
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      navBarOnScroll: (window.scrollY > 50)? 'navigation navigation_fixed' : 'navigation',
    });
  }

  handleActivePage(){
    let url = window.location.href
    let active = 0
    if(url.includes('contact'))
      active = 2
    return active
  }

  render() {
    return (
      <div className={`component__header ${(this.props.less)? 'component__header_less': '' }`}>
        <Navigation navBarOnScroll={this.state.navBarOnScroll} activeItem={this.handleActivePage()} />

        {this.props.children}        

      </div>
    );
  }
}


/*
 * Functional Child Components
 */

const Navigation = ({navBarOnScroll,activeItem})=>{
  return(
        <div className={navBarOnScroll}>
          <div className="logo"><img src={require('assets/images/logo.png')} alt="logo" /></div>
          <ul>
            <li className={(activeItem===0)?'active':''}><Link to="/">HOME</Link></li>
            <li className={(activeItem===1)?'active':''}><Link to="/">BURSARY</Link></li>
            <li className={(activeItem==2)?'active':''}><Link to="/contact">CONTACT</Link></li>
          </ul>
          <div className="contact">
            <span><IoLogoWhatsapp /></span> +94 960 985 7654 <br />
            <span><IoIosMail /></span> admin@alone.com
          </div>
        </div>
  );
}

export { Header }
