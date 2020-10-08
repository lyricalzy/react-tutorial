import React, { Component } from 'react';
import Form from './componenets/Form';
import TodoItempList from './componenets/TodoItemList';
import TodoListTemplate from './componenets/TodoListTemplate';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItempList/>
      </TodoListTemplate>
    );
  }
}

export default App;
