import React, {Component} from 'react'
// import Table from "./Table";

const containerStyles = {
    border: '1px solid black',
    padding: '40px 90px',
    height: '70vh',
    width: '170vh',

};
const tableStyle = {
};

const bodyStyle = {
};

const cellStyle = {
    border: '1px solid black',
    height: '100px',
    width: '1200px',
};

export default class App extends Component {
    render() {
        return (
            <div style={containerStyles}>
                <table style={tableStyle}>
                    <thead>

                    </thead>
                    <tbody style={bodyStyle}>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>{}</td>
                    </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}
