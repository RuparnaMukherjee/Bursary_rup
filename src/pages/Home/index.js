import React, { Component,useState } from 'react';
import { Ddux } from 'ddux'
import { AnimateOnScreen, Header, Footer } from 'components';
import {Row, Col, ProgressBar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Login } from 'pages/Home/Login';
import { Signup } from 'pages/Home/Signup';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPopup: false,
      showSignupPopup: false
    }
  }
  componentDidMount() {
    window.scroll(0,0)
    Ddux.update('loading',1)
    setTimeout(() => {
      Ddux.update('loading',0)
    }, 1000);
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div>

        <Header>
          <HeaderContent self={this} />
        </Header>

        <Login visible={this.state.showLoginPopup} onClose={()=>this.setState({showLoginPopup: false})} showSignup={() => this.setState({showLoginPopup: false, showSignupPopup: true})} />
        <Signup visible={this.state.showSignupPopup} onClose={()=>this.setState({showSignupPopup: false})} showLogin={() => this.setState({showSignupPopup: false, showLoginPopup: true})} />

        <div id="screen__home">
          <h4 className="title1"> They Need Your Help Like Never Before </h4>
          <h2 className="title2"> Recent <span>Bursary</span> </h2>
          <div className="divider"><span /><span /><span /><span /><span /></div>
          <RecentBursary />
          <div className="recent_donors">
            <br />
            <h2 className="title2"> Recent <span>Donors</span> </h2>
            <div className="divider"><span /><span /><span /><span /><span /></div>
            <RecentDonors />
          </div>
          <br />
          <h2 className="title2"> Partner <span>Donors</span> </h2>
          <div className="divider"><span /><span /><span /><span /><span /></div>
          <PartnerDonors />
        </div>

        <Footer />
      </div>
    );
  }
}


export { Home }


/*
 * Functional Child Components
 */

const RecentDonors = ()=>{
  return(
        <div className="bursary_container">
          <Row>
            <Col md={6}>
              <div className="left_container">
                <img src={require('assets/images/bg2.jpg')} alt="" />
                <div className="overlay_box">
                  <div className="content">
                    <h4>Help The Homeless People</h4>
                    <h2>Welfare</h2>
                    <h3>Stories</h3>
                    <Link to="#" className="button">View All Bursary</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <br />
              <AnimateOnScreen offset={800} defaultClass="animate__slideRight_default" animatedClass="animate__slide">
                <div className="donors"><p className="text">John Wick</p><p className="text">To <strong>Build Playground for Kids</strong></p><p className="text">Donation Amount : <span>$500</span></p></div>
              </AnimateOnScreen>
              <br />
              <AnimateOnScreen offset={800} defaultClass="animate__slideRight_default animate__delay8" animatedClass="animate__slide">
                <section className="donors"><p className="text">John Wick</p><p className="text">To <strong>Build Playground for Kids</strong></p><p className="text">Donation Amount : <span>$500</span></p></section>
              </AnimateOnScreen>
              <br />
              <AnimateOnScreen offset={800} defaultClass="animate__slideRight_default animate__delay1-0" animatedClass="animate__slide">
                <section className="donors"><p className="text">John Wick</p><p className="text">To <strong>Build Playground for Kids</strong></p><p className="text">Donation Amount : <span>$500</span></p></section>
              </AnimateOnScreen>
            </Col>
          </Row>
        </div>
  )
}

const PartnerDonors = ()=>{
  return(
        <div className="bursary_container">
          <Row>
            <Col md={3}>
              <img src="http://t.commonsupport.xyz/charitypro/images/sponsors/4.png" alt="" />
            </Col>
            <Col md={3}>
              <img src="http://t.commonsupport.xyz/charitypro/images/sponsors/3.png" alt="" />
            </Col>
            <Col md={3}>
              <img src="http://t.commonsupport.xyz/charitypro/images/sponsors/1.png" alt="" />
            </Col>
            <Col md={3}>
              <img src="http://t.commonsupport.xyz/charitypro/images/sponsors/2.png" alt="" />
            </Col>
          </Row>
        </div>
  )
}

const BursaryItem = ({raisedValue,progressValue,defaultClass,animatedClass})=>{
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const animateCount = ()=>{
    let temp = 0
    const t = setInterval(function(){
      temp++
      setCount(temp)
      if(temp===200){
        clearInterval(t)
        setCount(raisedValue)
      }
    }, 1);
  }
  const animateProgress = ()=>{
    let temp = 0
    const t = setInterval(function(){
      temp++
      setProgress(temp)
      if(temp===progressValue){
        clearInterval(t)
        setProgress(progressValue)
      }
    }, 5);
  }
  return(
            <AnimateOnScreen onScreen={()=>{ animateCount(); animateProgress();}} defaultClass={defaultClass} animatedClass={animatedClass}>
              <div className="bursary_wrapper">
                <figure>
                  <img src="http://alone.themexriver.com/alone/images/resource/cause-image-1.jpg" alt="" />
                    <div className="overlay_box">
                      <div className="content">
                        <p><span className="raised_money">${count}</span>  Raised of <span className="total_goal">$98,124</span> Goal</p><br />
                        <Link to="#" className="button">Donate Now</Link>
                      </div>
                    </div>
                  <div className="cause_over_title"><span className="raised_money">${count}</span>  Raised of <span className="total_goal">$98,124</span> Goal</div>
                </figure>
                <h5 className="bursary_title">Build Playground for Kids</h5>
                <ProgressBar striped animated label={true} variant="danger" now={progress} style={{width: '80%', margin: 'auto'}} />
                <p className="bursary_description">Lorem Ipsum simply text the printing dream Lorem Ipsum simply text the... <Link className="read_more" to="#"> Read More</Link></p>
                <p className="expiry">Available till : 15-08-2020</p>
              </div>
            </AnimateOnScreen>
  );
}

const RecentBursary = ()=>{
  return(
        <div className="bursary_container">
          <Row>
            <Col lg={4} md={6}>
              <BursaryItem raisedValue="39,141" progressValue={40} defaultClass="animate__slideUp_default" animatedClass="animate__slide" />
            </Col>
            <Col lg={4} md={6}>
              <BursaryItem raisedValue="39,141" progressValue={80} defaultClass="animate__slideUp_default animate__delay8" animatedClass="animate__slide" />
            </Col>
            <Col lg={4} md={6} className="hideInTablet">
              <BursaryItem raisedValue="39,141" progressValue={60} defaultClass="animate__slideUp_default animate__delay1-0" animatedClass="animate__slide" />
            </Col>
          </Row>
        </div>
  )
}

const HeaderContent = ({self})=>{
  return(
        <div className="sliding_titles">
          <AnimateOnScreen defaultClass="animate__slideLeft_default" animatedClass="animate__slide">
            <p className="title1">Give a little & change a lot.</p>
          </AnimateOnScreen>
          <AnimateOnScreen defaultClass="animate__slideRight_delay1" animatedClass="animate__slide">
            <p className="title2">Let’s <span>Work</span> Together!!</p>
          </AnimateOnScreen>
          <AnimateOnScreen defaultClass="animate__slideLeft_delay1-5" animatedClass="animate__slide">
            <p className="title3" style={{marginTop: 15}}>Your little support can bring smile to the homeless people.</p>
            <p className="title3">Be a part of the word by making a donation.</p>
          </AnimateOnScreen>
          <AnimateOnScreen defaultClass="animate__slideRight_delay1-8" animatedClass="animate__slide">
            <div className="button" onClick={()=>self.setState({showSignupPopup: true})}>
              Join Our Campaign
            </div>
            <div className="button_login" onClick={()=>self.setState({showLoginPopup: true})}>
              Login
            </div>
          </AnimateOnScreen>
        </div>
  )
}
