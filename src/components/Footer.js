import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="component__footer">
        <div className="overlay">
          <Row>
            <Col md={4}>  
              <div className="footer_about">  
                <h4>About Us</h4>   
                <p>Lorep lipsum about us</p>    
                <p><span><MdLocationOn /></span> 777, Path to of America.</p>
                <p><span><MdEmail /></span> admin@alone.com</p>
                <p><span><MdCall /></span>  +94 960 985 7654 </p>
              </div>       
            </Col>
            <Col md={8}>    
              <div className="gmap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.5347846009313!2d-75.53745978456959!3d41.53601677925088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32c9f92e7f5bfca!2sDitinex%20Hosting!5e0!3m2!1sen!2sin!4v1592421271254!5m2!1sen!2sin" frameBorder="0" className="map" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </Col>
          </Row>
          <div className="footer_end">
            <span>Alone</span> - Copyright © 2020. Developed by <a href="https://www.ditinex.com"><span>Ditinex Enterprise</span></a>
          </div>
        </div>
      </div>
    );
  }
}


/*
 * Functional Child Components
 */


export { Footer }
