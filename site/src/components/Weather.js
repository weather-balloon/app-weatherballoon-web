// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

type Props = {};
type State = {};

class Weather extends React.Component<Props, State> {
  render() {
    return (
      <Panel bsStyle="primary">
        <Panel.Heading componentClass="h3">Weather</Panel.Heading>
        <Panel.Body>Hot town, Summer in the city</Panel.Body>
      </Panel>
    );
  };
}

export default Weather;