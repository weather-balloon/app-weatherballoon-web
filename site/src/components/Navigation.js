// @flow

import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './Navigation.css';
import moment from 'moment';

type Props = {};

type State = {};

class Navigation extends React.Component<Props, State> {
  timerID: IntervalID;

  constructor(props) {
    super(props);
    this.state = {
      timestamp: Navigation.getTimestamp()
    };
  }

  static getTimestamp() {
    return moment(new Date());
  }

  tick() {
    this.setState({
      timestamp: Navigation.getTimestamp(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Navbar collapseOnSelect fluid className="main-nav" fixedBottom>
        <Navbar.Header>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <IndexLinkContainer to="/config">
              <NavItem eventKey={99}>
                <Button>
                  <i className="fa fa-cog"></i>
                </Button>
              </NavItem>
            </IndexLinkContainer>
          </Nav>
          <Navbar.Text pullLeft>
            {this.state.timestamp.format("dddd, MMMM Do YYYY")}
          </Navbar.Text>
          <Navbar.Text pullLeft>
            {this.state.timestamp.format("HH:mm")}
          </Navbar.Text>

          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>
                <Button type="button">
                  <i className="fa fa-home"></i>
                </Button>
              </NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/weather">
              <NavItem eventKey={2}>
                <Button>
                  <i className="fa fa-thermometer-empty"></i>
                </Button>
              </NavItem>
            </IndexLinkContainer>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
