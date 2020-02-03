import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './GroundCropped.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class GroundCropped extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;
        return (
            <div className='ground-cropped'>
                <div className={`car-one ${className} red`}></div>
                <div className={`car-one ${className} blue`}></div>
                <div className={`car-two ${className} black`}></div>
            </div>
        );
    }
}




