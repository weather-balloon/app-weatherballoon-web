import React from 'react';
import moment from 'moment';

type Props = { position: Position };

export class PositionDetails extends React.Component<Props> {
    render() {
        const position = this.props.position;
        if (position) {
            return (
                <ul>
                    <li>Timestamp: {moment(position.timestamp).toString()}</li>
                    <li>Latitude: {position.coords.latitude}</li>
                    <li>Longitude: {position.coords.longitude}</li>
                    <li>Altitude: {position.coords.altitude}</li>
                    <li>Accuracy: {position.coords.accuracy/1000} km</li>
                </ul>
            );
        } else {
            return (<i>None</i>)
        }
    }
}

export default PositionDetails;