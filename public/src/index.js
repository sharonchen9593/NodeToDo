//dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
import NewEntry from './components/newentry';
import TodoList from './components/todolist'

var apiUrl = __dirname + 'api/todos/test';

// get api

$.getJSON(apiUrl, function(data) {
  console.log(data)
})

const App = () => {
    return (
      <div>
        <NewEntry />
        <div>
          <TodoList />
        </div>
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))