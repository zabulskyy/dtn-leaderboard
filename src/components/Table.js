import React, {Component} from 'react'

const tableStyles = {};
const tableHead = {};
const tableBody = {};
const teamRow = {};
const playerRow = {};

/*
* teams: int
* playersPerTeam: arr(int) : [4, 4, 3, ...]
* */
export default class Table extends Component {
    //
    // public teams;
    // public playersPerTeam;
    //
    //
    // componentWillMount() {
    //
    // }
    //
    // playerRows = () => {
    //
    //     let rows = [];
    //     for (let i = 0; i < this.teams; i++) {
    //         rows.push(
    //             <tr key={i} style={teamRow}>
    //                 {this.playersPerTeam.map((members, index) => {
    //                     return
    //                     <tr style={playerRow} key={index}>
    //                         <td>
    //
    //                         </td>
    //                     </tr>
    //                 })}
    //             </tr>)
    //     }
    //     return rows;
    // };
    //
    // render() {
    //     return (
    //         <div style={tableStyles}>
    //             <div>
    //                 <table>
    //                     <tr style={tableHead}>
    //
    //                     </tr>
    //                     <tr style={tableBody}>
    //                         {this.playerRows()}
    //                     </tr>
    //                 </table>
    //             </div>
    //         </div>
    //     );
    // }
}
