import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Ground.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Ground extends PureComponent {
    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const { className } = this.props;
        return (
            <div className={`ground ${className}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}
