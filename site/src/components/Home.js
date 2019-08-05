// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';
import BasicWeatherPanel from './BasicWeatherPanel';

type Props = {};
type State = {};

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.state = { temperature: '10', scale: 'c' };
  }

  handleTemperatureChange(temperature) {
    this.setState({ scale: 'c', temperature: temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    return (
      <Panel bsStyle="primary">
        <Panel.Heading componentClass="h3">Home</Panel.Heading>
        <Panel.Body>
          <BasicWeatherPanel scale={scale}
            temperature={temperature}
            onTemperatureChange={this.handleTemperatureChange}>
          </BasicWeatherPanel>
        </Panel.Body>
      </Panel>
    );
  };
}

export default Home;
