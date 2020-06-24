import React, { Component, useState } from 'react';
import { Ddux } from 'ddux'
import { API } from 'services'
import { AnimateOnScreen } from 'components';
import {Row, Col, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdClose, MdPerson, MdLock, MdLockOutline, MdAssignmentInd, MdEmail } from "react-icons/md";

class Signup extends Component {
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
    const animateClass = (this.props.visible) ? 'cardWrapper cardWrapperAnimate' : 'cardWrapper'
    const screenVisibility = (this.props.visible) ? 'screen__login_visibility' : ''
    return(
      <div id="screen__login" className={screenVisibility}>
        <div className={animateClass}>
          <div className="close_button" onClick={()=>this.props.onClose()}><MdClose /></div>
          <Row style={{height: '100%'}}>
            <Col lg={6} className="panel left">
              <div className="vcenter">
                <h3>REGISTRATION</h3>
                <SignupForm self={this} />
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

export { Signup }


/*
 * Functional Child Components
 */


const SignupForm = ({self})=>{
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [msg, setMsg] = useState('')
  
  const handleSubmit = async () => {
    Ddux.update('loading', 1, true)
    setMsg('')
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(name == '' || email === '' || password === '' || confirmPassword === '' || type === '' || type === '--Account Type--'){
      setColor('danger')
      setMsg("Fields can't be Empty")
    }
    else if (!regex.test(email)) {
      setColor('danger')
      setMsg('Invalid Email')
    }
    else if(password !== confirmPassword){
      setColor('danger')
      setMsg("Passwords doesn't Match")
    }
    else{
      let data = await API.signup(name, email, password, confirmPassword, type)
      if(data.success){
        setColor("success")
        setMsg("Registration Successful, Please login")
        setTimeout(() => {self.props.showLogin()}, 1000);
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
          <InputGroup.Text id="name-addon1"><MdPerson /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="text"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="name-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="email-addon1"><MdEmail /></InputGroup.Text>
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
          <InputGroup.Text id="password-addon1"><MdLockOutline /></InputGroup.Text>
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
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="password-addon1"><MdLock /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="password"
          placeholder="Confirm Password"
          aria-label="password"
          aria-describedby="password-addon1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="password-addon1"><MdAssignmentInd /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>--Account Type--</option>
          <option>Donors</option>
          <option>Receipent</option>
        </FormControl>
      </InputGroup>
      <Button variant="primary" size="lg" block onClick={() => handleSubmit()}>
        Register
      </Button>
      <div className="go2signup">Already Registered? <span onClick={() => self.props.showLogin()}>Login Now.</span></div>
    </div>
  );
}
