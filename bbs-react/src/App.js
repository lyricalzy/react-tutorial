import React, { Component } from 'react';

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
    const list = boards.map(function(row){
      return row.brdno + row.brdwriter;
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default App;
