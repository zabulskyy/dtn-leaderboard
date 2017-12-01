import React, {Component} from 'react'
import Table from "./Table";

const containerStyles = {
    padding: '40px 70px',
};


export default class App extends Component {
    render() {
        return (
            <div style={containerStyles}>
                <Table></Table>
            </div>
        );
    }
}
