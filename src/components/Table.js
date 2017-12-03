import React, { Component,  } from 'react';
import PropTypes from 'prop-types';
import Players from "./TableComponents/Players";

const bodyStyle = {};


const tableStyle = {
    borderSpacing: '2px',
    width: '100%',
};


/*
* teams: int
* playersPerTeam: arr(int) : [4, 4, 3, ...]
* */
export default class Table extends Component {


    render() {

        return (
            <div>
                <table style={tableStyle}>
                    <thead>

                    </thead>
                    <tbody style={bodyStyle}>
                    {this.props.playersPerTeam.map(
                        i =>
                            <Players playersAmount={i} key={i.key}/>

                    )}
                    </tbody>

                </table>
            </div>
        );
    }
}
Table.propTypes = {
    playersPerTeam: PropTypes.array.isRequired,
};