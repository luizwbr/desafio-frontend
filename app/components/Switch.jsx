import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Switch extends Component {
    static propTypes = {
        id: PropTypes.string,
        action: PropTypes.function
    };

    state = {
        on: false
    };

    toggleSwitchState = () => {
        const { action } = this.props;
        this.setState((state) => {
            return {
                on: !state.on
            }
        }, action);
    };

    render() {
        const { id } = this.props;
        const { on } = this.state;

        let checked = undefined;
        if (on) {
            checked = 'checked';
        }

        return (
            <div className="switch-container">
                <div className="switch">
                    Ligar / desligar
                </div>
                <div 
                    id={id} 
                    className="switch">
                    <input 
                        id={`switch-${id}`} 
                        type="checkbox" 
                        name="switch" 
                        className="switch-checkbox"
                        onChange={this.toggleSwitchState}
                        value={checked}/>
                    <label className="switch-label" for={`switch-${id}`}></label>
                </div>            
            </div>
        );
    }
}
    