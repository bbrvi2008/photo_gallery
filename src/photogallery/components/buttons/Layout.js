import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import './style.css';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Panel className="square">
        <Panel.Body className="content button">
          {children}
        </Panel.Body>
      </Panel>
    );
  }
}

export default Layout;