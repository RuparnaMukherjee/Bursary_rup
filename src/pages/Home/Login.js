import React, { Component, useState } from 'react';
import { Ddux } from 'ddux'
import { API } from 'services'
import Global from 'store/Global'
import { AnimateOnScreen } from 'components';
import {Row, Col, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdClose, MdPerson, MdLock, MdEmail } from "react-icons/md";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }

  render() {
    const animateClass = (this.props.visible) ? 'cardWrapper cardWrapperAnimate' : 'cardWrapper'
    const screenVisibility = (this.props.visible) ? 'screen__login_visibility' : ''
    return(
      <div id="screen__login" className={screenVisibility}>
        <div className={animateClass}>
          <div className="close_button" onClick={()=>this.props.onClose()}><MdClose /></div>
          <Row style={{height: '100%'}}>
            <Col lg={6} className="panel left">
              <div className="vcenter">
                {this.state.isLogin?
                  <> 
                    <h3>WELCOME</h3>
                    <p>Login to create bursary and collect funds online</p>
                    <LoginForm self={this} />
                  </> : <> 
                    <h3>FORGOT PASSWORD</h3>
                    <ForgotForm self={this} />
                  </>
                }
              </div>
            </Col>
            <Col lg={6} className="hideInMobile hideInTablet">
              <div className="panel right">
                <div className="overlay">
                  <div className="content">
                    <div className="logo"><img src={require('assets/images/logo.png')} alt="logo" /></div>
                    <br /><br />
                    <p>Even a small contribution becomes a part of a huge change.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export { Login }


/*
 * Functional Child Components
 */


const LoginForm = ({self})=>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async () => {
    Ddux.update('loading', 1, true)
    setMsg('')
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email === '' || password === ''){
      setColor('danger')
      setMsg("Fields can't be Empty")
    }
    else if (!regex.test(email)) {
      setColor('danger')
      setMsg('Invalid Email')
    }
    else{
      let data = await API.login(email, password)
      if(data.success){
        data.data.createdAt = Date.now()
        Global.user = data.data
        localStorage.setItem('userData', JSON.stringify(data.data));
        setColor("success")
        setMsg("Login Successful, Redirecting...")
        setTimeout(() => {
          // Redirect to Dashboard
        }, 1000);
      }
      else{
        setColor("danger")
        setMsg(data.Error)
      }
    }
    Ddux.update('loading', 0, true)
  }

  return(
    <div className="form">
      <Alert show={msg} variant={color}>{msg}</Alert>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="email-addon1"><MdPerson /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="email"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="email-addon1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="password-addon1"><MdLock /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="password"
          placeholder="Password"
          aria-label="password"
          aria-describedby="password-addon1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <div className="forgot_wrapper"><div className="forgot" onClick={() => self.setState({isLogin: false})}>Forgot Password ?</div></div>
      <Button variant="primary" size="lg" block onClick={() => handleSubmit()}>
        Login
      </Button>
      <div className="go2signup">Don't have an acccount? <span onClick={() => self.props.showSignup()}>Join Now.</span></div>
    </div>
  );
}

const ForgotForm = ({self})=>{

  const [email, setEmail] = useState('')
  const [color, setColor] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async () => {
    Ddux.update('loading', 1, true)
    setMsg('')
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email === ''){
      setColor('danger')
      setMsg("Fields can't be Empty")
    }
    else if (!regex.test(email)) {
      setColor('danger')
      setMsg('Invalid Email')
    }
    else{
      let data = await API.resetPassword(email)
      if(data.success){
        setColor("success")
        setMsg("Instructions are sent to your Email")
        setTimeout(() => {
          self.setState({isLogin: true})
        }, 1000);
      }
      else{
        setColor("danger")
        setMsg(data.Error)
      }
    }
    Ddux.update('loading', 0, true)
  }

  return(
    <div className="form">
      <Alert show={msg} variant={color}>{msg}</Alert>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="email-addon1"><MdEmail /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="email"
          placeholder="Enter Email"
          aria-label="Email"
          aria-describedby="email-addon1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <Button variant="primary" size="lg" block onClick={() => handleSubmit()}>
        Submit
      </Button>
      <div className="go2signup">Want to Sign in? <span onClick={() => self.setState({isLogin: true})}>Login Now.</span></div>
    </div>
  );
}
