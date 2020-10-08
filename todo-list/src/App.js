import React, { Component } from 'react';
import Form from './componenets/Form';
import TodoItempList from './componenets/TodoItemList';
import TodoListTemplate from './componenets/TodoListTemplate';

class App extends Component {

  if = 3 // 이미 0, 1, 2가 있음

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // input 비운뒤
      // concat을 사용해 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItempList todos={todos}/>
      </TodoListTemplate>
    );
  }
}

export default App;
