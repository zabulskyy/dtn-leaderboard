import React, {Component} from 'react'

const bodyStyle = {};

const cellStyle = {
    border: '2px solid dimgrey',
    height: '100%',
    width: '33.34%',
    borderTop: 'white',
    borderBottom: 'white',
};
const cellNullStyle = {
    border: '2px solid dimgrey',
    borderTop: 'white',
    borderBottom: 'white',
    width: '0',
};
const tableStyle = {
    borderSpacing: '2px',
    height: '500px',
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
                    <tr>
                        <td style={cellStyle}>{}</td>
                        <td style={cellStyle}>{}</td>
                        <td style={cellNullStyle}>{}</td>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}
