// @flow

import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { UserLocationContext } from '../Contexts';
import PositionDetails from './util/PositionDetails';
import './Config.css';

type Props = {};
type State = {};

class Config extends React.Component<Props, State> {
    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Heading componentClass="h3">
                    Configuration
                </Panel.Heading>
                <Panel.Body>
                    <Table striped bordered hover responsive className="configTable">
                        <tr>
                            <th scope="row">Location</th>
                            <td >
                                <UserLocationContext.Consumer>
                                    {location => (
                                        <PositionDetails position={location} />
                                    )}
                                </UserLocationContext.Consumer>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Property</th>
                            <td >
                                Value
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Property</th>
                            <td >
                                Value
                            </td>
                        </tr>
                    </Table>
                </Panel.Body>
            </Panel>
        );
    };
}

export default Config;