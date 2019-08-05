// @flow

import React from 'react';
import { Panel } from 'react-bootstrap';

type Props = {};
type State = {};

class BasicWeatherPanel extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
      }
      
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <Panel>
                {temperature}&deg; {scale}
            </Panel>
        )
    }
}

export default BasicWeatherPanel;