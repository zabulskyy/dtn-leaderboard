import React, {Component,} from 'react';


const cellStyle = {
    border: '2px solid grey',
    height: '25px',
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
export default class Player extends Component {
    render() {
        return (
            <tr>
                <td style={cellStyle}>{}</td>
                <td style={cellStyle}>{}</td>
                <td style={cellNullStyle}>{}</td>
                <td style={cellStyle}>{}</td>
            </tr>
        )
    }
}