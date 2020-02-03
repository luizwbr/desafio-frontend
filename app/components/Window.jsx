import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Window.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Window extends Component {
    static propTypes = {
        id: PropTypes.string,
        light: PropTypes.boolean
    };

    constructor(props) {
        super(props)
    
        this.state = {
            light: props.light
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.light !== this.props.light) {
            this.setState({ light: this.props.light });
        }
    }

    toggleLightState = () => {
        this.setState((state) => {
            return {
                light: !state.light
            }
        })
    };

    render() {
        const { id } = this.props;
        const { light } = this.state;

        let className = 'window';

        if (light) {
            className += ' lightOn';
        }

        return (
            <div 
                key={`window-${id}`}
                id={`window-${id}`}
                className={className}
                onClick={this.toggleLightState}>
            </div>
        );
    }
}
