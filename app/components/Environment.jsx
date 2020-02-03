import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SunsetApiHelper from '../helpers/sunsetApiHelper';
import './Environment.css';
import Road from './Road';
import Forest from './Forest';
import Ground from './Ground';
import GroundCropped from './GroundCropped';
import Highscraper from './Highscraper';
import Water from './Water';
import Switch from './Switch';
import Brickhouse from './Brickhouse';
import { geolocated } from "react-geolocated";

/**
 * @author Luiz Felipe Weber <luiz.weber@pm.me>
 * @since 1.0.0 2020-02-02
 */
class Environment extends Component {
    static propTypes = {
        isGeolocationAvailable: PropTypes.boolean,
        isGeolocationEnabled: PropTypes.boolean,
        coords: PropTypes.exact({
            latitude: PropTypes.number,
            longitute: PropTypes.number
        }),   
    };

    static defaultProps = {
        coords: {
            latitude: null,
            longitute: null,
        },        
    };

    constructor(props) {
        super(props)
    
        this.state = {
            lightAll: false,
            isDay: undefined,  
        }
    }    

    componentWillReceiveProps(nextProps) {
        if (nextProps.coords
            && nextProps.coords.latitude !== null
            && nextProps.coords.longitude !== null) {
            this.checkIsDayOrNight(nextProps);
        }
        return null;
    }

    toogleLightState = () => {
        this.setState((state) => {
            return {
                lightAll: !state.lightAll
            }
        })
    };
   
    checkIsDayOrNight = (nextProps) => {
        const { coords } = nextProps;

        if (coords)
            SunsetApiHelper.checkIsDay(coords)
                .then((isDay) => {
                    this.setState(() => {
                        return {
                            isDay: isDay
                        }
                    });                
                });
    };

    renderEnvironment = () => {
        const { isDay, lightAll } = this.state;

        let className = '';
        if (isDay === true) {
            className = 'day';
        } else if (isDay === false) {
            className = 'night';
        }

        return (
            <React.Fragment>
                <Highscraper lightAll={lightAll} className={className}/>
                <Brickhouse lightAll={lightAll} className={className}/>
                <Forest className={className}/>
                <GroundCropped className={className}/>
                <Road className={className}/>
                <Water className={className}/>
                <Ground className={className}/>
                <Switch id="lightAll" action={this.toogleLightState} />
            </React.Fragment>
        );
    };

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Seu navegador não suporta geo-localização</div>
        ) : this.props.coords || !this.props.isGeolocationEnabled ? (
            this.renderEnvironment()
        ) : (
            <div>Recuperando os dados de geolocalização&hellip; </div>
        );
    };
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Environment);
