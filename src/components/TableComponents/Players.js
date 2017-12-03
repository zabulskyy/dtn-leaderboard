import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const spaceStyle = {
  width: "100%",
  height: "10px",
};

export default class Players extends Component {
    render() {
        let players = [];
        for (let i = 0; i < this.props.playersAmount; i++) {
            players.push(<Player/>)
        }
        players.push(<tr style={spaceStyle}/>);

        return (
            players
        )
    }
}

Players.propTypes = {
    playersAmount: PropTypes.number.isRequired,
};