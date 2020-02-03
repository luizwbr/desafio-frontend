import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Forest.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Forest extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const {className} = this.props;
        return (
            <React.Fragment>
                <div className={`leaves ${className}`}>
                    <div></div>
                </div>
                <div className={`wood ${className}`}></div>
            </React.Fragment>
        );
    }
}
