import React, { Component } from 'react';
import BoardItem from './components/BoardItem';
import BoardForm from './components/BoardForm';

class App extends Component {
  state = {
    maxNo: 3,
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
  handleSaveData = (data) => {
    this.setState({
      maxNo: this.state.maxNo + 1,
      boards: this.state.boards.concat({ brdno: this.state.maxNo, brdregdate: new Date(), ...data })
    });
  }
  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    });
  }
  render() {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.handleSaveData}/>
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
                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)  
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
