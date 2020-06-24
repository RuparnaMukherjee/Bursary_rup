import React, { Component,useState } from 'react';
import { Ddux } from 'ddux'
import { AnimateOnScreen, Header, Footer } from 'components';
import {Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scroll(0,0)
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div id="screen__contact">

        <Header less={true}>
          <HeaderContent self={this} />
        </Header>

        <div className="contents">
          <Card>
          <Card.Header>Send us a message</Card.Header>
          <Card.Body>
          <Card.Text>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            />
            </InputGroup>
            <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>Message</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Card.Text>
          <br />
          <Button style={{float: 'right'}} variant="secondary">Send</Button>
          </Card.Body>
          </Card>
        </div>

        <Footer />
      </div>
    );
  }
}


export { Contact }


/*
 * Functional Child Components
 */


const HeaderContent = ({self})=>{
  return(
    <div>
      <h3 className="title">Contact Us</h3>
    </div>
  )
}



