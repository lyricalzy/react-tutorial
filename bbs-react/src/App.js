import React, { Component } from 'react';
import BoardItem from './components/BoardItem';

class App extends Component {
  state = {
    boards: [
      {
        brdno: 1,
        brdwriter: 'Bak Jaeyoung',
        brdtitle: 'Board Test 01',
        brdregdate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'Seo hyundong',
        brdtitle: 'Board Test 02',
        brdregdate: new Date()
      },
    ]
  }
  render() {
    const { boards } = this.state;

    return (
      <div>
        <table border="1">
          <tbody>
            <tr align="center">
              <th width="50">No.</th>
              <th width="300">Title</th>
              <th width="100">Writer</th>
              <th width="100">RegDate</th>
            </tr>
            {
              boards.map(row =>
                (<BoardItem key={row.brdno} row={row} />)  
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
