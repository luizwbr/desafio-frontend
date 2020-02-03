import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Highscraper.css';
import Door from './Door';
import Floor from './Floor';
import Window from './Window';

const BUILDING = Object.freeze({
    FLOORS: 7,
    WINDOWS_PER_FLOOR: 6,
});

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
export default class Highscraper extends PureComponent {
    static propTypes = {
        lightAll: PropTypes.boolean,
        className: PropTypes.string,
    };

    state = {
        lightAll: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.lightAll !== prevState.lightAll) {
            return { lightAll: nextProps.lightAll };
        }
        else return null;
    }

    renderEntrance = () => {
        return (
            <Floor id={'entrance'}>
                <Door />
            </Floor>
        );
    }

    renderWindows = () => {
        const { lightAll } = this.state;

        const windows = [];
        for (let windowIndex = 0; windowIndex < BUILDING.WINDOWS_PER_FLOOR; windowIndex++) {
            windows.push(<Window id={windowIndex} light={lightAll} />);
        };
        return windows;
    }

    renderFloorComponent = (id, content) => {
        return (
            <Floor id={id}>
                {content}
            </Floor>
        );
    }

    renderFloors = () => {
        const floors = [];
        for (let floorIndex = 0; floorIndex < BUILDING.FLOORS; floorIndex++) {
            const floorContent = this.renderFloorComponent(floorIndex, this.renderWindows());
            floors.push(floorContent);
        }
        return floors;
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`highscraper ${className}`}>
                <div className='wall-one'>
                </div>
                <div className='wall-two'>
                    {this.renderFloors()}
                    {this.renderEntrance()}
                </div>
                <div className='roof'>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}


