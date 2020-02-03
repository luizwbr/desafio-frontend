import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Door.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Door extends Component {
    static propTypes = {
        id: PropTypes.string,
    };

    state = {
        open: false
    };

    toggleDoorState = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    };

    render() {
        const { id } = this.props;
        const { open } = this.state;

        let className = 'door';

        if (open) {
            className += ' doorOpen';
        }
        return (
            <div id={id}  className="backDoor">
                <div
                    className={className} 
                    onClick={this.toggleDoorState}>
                </div>
            </div>
        );
    }
}


