import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Water.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Water extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;
        return (
            <React.Fragment>
                <div className={`water ${className}`}></div>
                <div className={`fontain ${className}`}>
                    <div></div>
                </div>
                <div className={`water-drops ${className}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </React.Fragment>
        );
    }
}



    