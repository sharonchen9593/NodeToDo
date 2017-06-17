//dont need these, imported it in index.html using script tags
//import React from 'react';
//import ReactDOM from 'react-dom';
//import $ from 'jquery';
import NewEntry from './components/newentry';
import TodoList from './components/todolist'

// var apiUrl = __dirname + 'api/todos/test';

// // get api

// $.ajax({
//   url: apiUrl,
//   type: 'GET',
//   contentType: 'application/json',
//   success: function(data) {
//     console.log(data)
//   },
//   error: function() {

//   }
// })

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