import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Floor.css';

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Floor extends PureComponent {  
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.component,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            children
        } = this.props;
        return (
            <div 
                id={`floor-${id}`}
                className='floor'>
                {children}
            </div>
        );
    }
}


